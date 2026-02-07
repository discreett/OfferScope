import OpenAI from "openai";
const client = new OpenAI();

export async function POST(request: Request) {
    const response = await client.responses.create({
        model: "gpt-5-nano",
        input: "placeholder"
    });

    return Response.json(response.output_text);
}