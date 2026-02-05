import { getDocument } from 'pdfjs-serverless';

// Provide a URL where pdfjs can load its standard font data.
// In production you should host these files yourself and set STANDARD_FONT_DATA_URL.
const STANDARD_FONT_DATA_URL = process.env.STANDARD_FONT_DATA_URL || 'https://unpkg.com/pdfjs-dist@2.16.105/build/generic/standard_fonts/';

export async function POST(request: Request) {
  try {
    const arrayBuffer = await request.arrayBuffer();
    const loadingTask = getDocument({ data: new Uint8Array(arrayBuffer), standardFontDataUrl: STANDARD_FONT_DATA_URL });
    const pdf = await loadingTask.promise;

    let fullText = '';
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      const pageText = textContent.items.map((it: any) => it.str).join(' ');
      fullText += pageText + '\n\n';
    }

    return new Response(JSON.stringify({ text: fullText }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
