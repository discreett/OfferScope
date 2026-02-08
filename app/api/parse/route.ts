import { extractText, getDocumentProxy } from "unpdf";
import OpenAI from "openai";
import { z } from "zod";
import { zodTextFormat } from "openai/helpers/zod.mjs";

export async function POST(request: Request) {
  try {
    const client = new OpenAI();
    const formData = await request.formData();
    const file = formData.get("file");

    if (!file || !(file instanceof File)) {
      return Response.json({ error: "No file uploaded" }, { status: 400 });
    }

    const buffer = await file.arrayBuffer();
    const pdf = await getDocumentProxy(new Uint8Array(buffer));
    const { text } = await extractText(pdf, { mergePages: true });

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
      input: [
        {
          role: "system",
          content:
            "Extract structured information from offer letters. Return empty strings for missing fields.",
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
          ${text}`,
        },
      ],
      text: { format: zodTextFormat(OfferInfo, "offer_info") },
    });

    return Response.json({ offer: response.output_parsed });

  } catch (e) {
    console.error("API Error:", e);
    return Response.json(
      {
        error: "Failed to process file",
        details: e instanceof Error ? e.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}