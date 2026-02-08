import { extractText, getDocumentProxy } from 'unpdf'
import OpenAI from "openai";
import { z } from 'zod'
import { zodResponseFormat } from 'openai/helpers/zod.mjs';

export async function POST(request: Request) {
  try {
    const client = new OpenAI();
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file || !(file instanceof File)) {
      return Response.json({ error: 'No file uploaded' }, { status: 400 })
    }

    const buffer = await file.arrayBuffer();
    const pdf = await getDocumentProxy(new Uint8Array(buffer));
    const {text} = await extractText(pdf, { mergePages: true });

    const OfferInfo = z.object({
      company: z.string(),
      salary: z.string(),
      location: z.string(),
      start_date: z.string(),
      end_date: z.string(),
      offer_deadline: z.string(),
      type_of_employment: z.string(),
    });

    const response = await client.responses.parse({
      model: "gpt-5-mini-2025-08-07",
      messages: [
        {
          role: "system",
          content: "You are an assistant that extracts structured information from offer letters. Extract the requested information and return it in the specified JSON format. If information is missing or not applicable, use an empty string."
        },
        {
          role: "user",
          content: `Extract the following information from this offer letter text:
          - Company name
          - Salary (include currency and frequency if mentioned)
          - Location (City, State/Country)
          - Start date
          - End date (if applicable, otherwise empty string)
          - Offer deadline (if mentioned, otherwise empty string)
          - Type of employment (remote/hybrid/in-person, otherwise empty string)

          Text to analyze:
          ${text}`
        }
      ],
      response_format: zodResponseFormat(OfferInfo, "offer_info")
    });

    const parsed = JSON.parse(response.output_parsed || '{}');
    return Response.json({ offer: parsed })

  } catch (e) {
    console.error('API Error:', e);
    return Response.json({ 
      error: 'Failed to process file', 
      details: e instanceof Error ? e.message : 'Unknown error' 
    }, { status: 500 })
  }
}
