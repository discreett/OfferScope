'use client'
import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import styles from '@/styles/dropzone.module.css'

function MyDropzone() {
    const [files, setFiles] = useState([]);
    const [extracted, setExtracted] = useState<Record<string, string>>({});
    const onDrop = useCallback((acceptedFiles: File[]) => {
        const pdfs = (acceptedFiles || []).filter(file =>
            file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf')
        );
        if (pdfs.length) {
            setFiles(prev => [
                ...prev,
                ...pdfs.map(file =>
                    Object.assign(file, {preview: URL.createObjectURL(file)})
                )
            ]);
            // kick off server-side extraction for each PDF
            pdfs.forEach(file => extractText(file));
        }
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({
      onDrop,
      accept: {'application/pdf': ['.pdf']},
      maxFiles: 2,
      multiple: true
    })

  const removeFile = (name: string) => {
    setFiles(prev => {
      const removed = prev.filter(file => file.name === name)
      removed.forEach(f => URL.revokeObjectURL(f.preview))
      return prev.filter(file => file.name !== name)
    })
  }

        async function extractText(file: File) {
            try {
                const arrayBuffer = await file.arrayBuffer();
                const res = await fetch('/api/extract', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/pdf', 'X-Filename': file.name },
                    body: arrayBuffer
                });
                const data = await res.json();
                setExtracted(prev => ({ ...prev, [file.name]: data.text || data.error || '' }));
            } catch (err) {
                setExtracted(prev => ({ ...prev, [file.name]: String(err) }));
            }
        }

    return (
        <form>
            <div {...getRootProps(
                {
                    className: styles.container
                }
            )}>
        <input {...getInputProps()} />
        {
            isDragActive ?
            <p>Drop the files here ...</p> :
            <p>Drag 'n' drop some files here, or click to select files</p>
        }
        </div>

        <ul>
            {files.map(file => (
                <li key={file.name}>
                    <img src={file.preview}
                    alt={file.name}
                    width={100}
                    height={100}
                    onLoad={() => URL.revokeObjectURL(file.preview)}
                    />
                    <button type = "button" onClick={() => removeFile(file.name)}>
                      Remove
                    </button>
                    <p>{file.name}</p>
                </li>
            ))}
        </ul>
        </form>
    )
    }

export default MyDropzone