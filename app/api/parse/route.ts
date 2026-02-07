import { extractText, getDocumentProxy } from 'unpdf'
import OpenAI from "openai";

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
    const response = await client.responses.create({
      model: "gpt-5-nano",
      instructions: 'You are an assistant that extracts structured information from offer letters. Always respond with JSON in the format specified in the input.',
      input: `You are a professional assistant that helps individuals understand their job offers. Given an offer letter, extract the following information and return them as a valid JSON object.
        - Company
        - Salary
        - Location (city and state)
        - Start date
        - End date (if applicable)


        Return JSON with keys: company, salary, location, start_date, end_date.

        Text:
        ${text}`,
      
    });

    return Response.json({ text: response.output_text })

  } catch (e) {
    return Response.json({ error: 'Failed to process file' }, { status: 400 })
  }
}
