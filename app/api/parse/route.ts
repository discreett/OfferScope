import { extractText, getDocumentProxy } from "unpdf";
import OpenAI from "openai";
import { z } from "zod";
import { zodTextFormat } from "openai/helpers/zod.mjs";

export async function POST(request: Request) {
  try {
    const client = new OpenAI();
    const formData = await request.formData();
    const files = formData.getAll('files').filter(f => f instanceof File) as File[]

    const offers = await Promise.all(files.map(async (f) => {
      if (!f || !(f instanceof File)) {
        return Response.json({ error: "No file uploaded" }, { status: 400 });
      }

      if (f.type !== "application/pdf") {
        return Response.json(
          { error: "File must be a PDF" },
          { status: 400 },
        );
      }

      const MAX_FILE_SIZE = 10 * 1024 * 1024;
      if (f.size > MAX_FILE_SIZE) {
        return Response.json(
          { error: "File too large. Maximum size is 10MB" },
          { status: 413 },
        );
      }

      const buffer = await f.arrayBuffer();
      const pdf = await getDocumentProxy(new Uint8Array(buffer));
      const { text } = await extractText(pdf, { mergePages: true });

      const OfferInfo = z.object({
        company: z.string(),
        job_title: z.string(),
        pay: z.string(),
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
              `You are a professional assistant that extracts relevant information from user-uploaded offer letters.
              You will follow and respond with a valid JSON object and place the relevant data into the corresponding spots.
              Extract structured information from offer letters. Return empty strings for missing fields.`,
          },
          {
            role: "user",
            content:
            `You are a professional assistant assisting students, graduates, and job seekers in understanding their offer letters.
            Given a job offer letter, extract their offer details and return them in a structured JSON format.
            Focus on accurately identifying and extracting the following information in a JSON object with the specified keys:

            {
              "company": "full company name",
              "job_title": "full job title",
              "pay": "pay details",
              "location": "city, state, country",
              "start_date": "start date",
              "end_date": "end date",
              "offer_deadline": "offer deadline",
              "type_of_employment": "Determine between remote/hybrid/in-person",
            }
            
            FOLLOW THESE STRICT GUIDELINES:
            - For company, extract the full legal name of the company. Do not return abbreviations or common names.
            - For job title, the title must be in it's full form. No abbreviations. E.g., "Software Engineer II" instead of "SWE II" or "Software Engineer".
              Do not include the season of the internship (e.g., "Summer") in the job title.
            - For pay, extract the base salary or hourly rate only. Exclude bonuses, equity, stipends, or benefits. 
              Do not include a comma in the number. E.g., "$120000" or "$60/hour".
            - For location, use the format "city, state, country". Abbreviate state names to their two-letter codes (e.g., CA for California). E.g, "San Francisco, CA, USA".
            - For dates, use the format "YYYY-MM-DD". If the date is not explicitly stated, return an empty string.
            - For type of employment, return exactly one of: 'remote', 'hybrid', or 'in-person'. Do not return other values based on the content of the letter.
            - If the type of employment is remote, use the company office or HQ location if mentioned; otherwise return an empty string.
            - Do not infer missing information
            - Do not guess or normalize beyond the text
            - If not explicitly stated, return an empty string
            - Return only the JSON object, nothing else

            Text to analyze:
            ${text}`,
          },
        ],
        text: {
          format: zodTextFormat(OfferInfo, "offer_info")
        },
      });
      return response.output_parsed;
    }))


    return Response.json(
      { offers }
    );

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