import { extractText, getDocumentProxy } from 'unpdf'

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file || !(file instanceof File)) {
      return Response.json({ error: 'No file uploaded' }, { status: 400 })
    }
    const buffer = await file.arrayBuffer();
    const pdf = await getDocumentProxy(new Uint8Array(buffer));
    const {text} = await extractText(pdf, { mergePages: true });
    
    return Response.json({text})

  } catch (e) {
    return Response.json({ error: 'Failed to process file' }, { status: 400 })
  }
}