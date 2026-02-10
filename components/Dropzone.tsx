'use client'
import {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import styles from '@/styles/dropzone.module.css'

type pdfWithPreview = File & { preview: string };

function MyDropzone() {
    const [files, setFiles] = useState<pdfWithPreview[]>([]);
    const [result, setResult] = useState<any>(null);

    const OFFER_FIELDS = [
        { key: "company", label: "Company" },
        { key: "job_title", label: "Job Title" },
        { key: "pay", label: "Pay" },
        { key: "location", label: "Location" },
        { key: "start_date", label: "Start Date" },
        { key: "end_date", label: "End Date" },
        { key: "offer_deadline", label: "Offer Deadline" },
        { key: "type_of_employment", label: "Work Type" }
    ]

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
            }
        )
    }

    const parsePdf = async (files: pdfWithPreview[]) => {
        try {
            const formData = new FormData();
            files.forEach(file => formData.append('files', file));

            const res = await fetch('/api/parse', {
                method: 'POST',
                body: formData
            });
            
            const data = await res.json();
            setResult(data.offers)
        } catch (err) {
            setResult(String(err));
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
                    </li>
                ))}

                {files.length == 1 && (
                    <p style={{color: 'red'}}>Select one more!</p>
                )}

                {files.length > 2 && (
                    <p style={{color: 'red'}}>Only 2 files allowed</p>
                )}

                {files.length == 2 && (
                    <button type = "button" onClick={() => parsePdf(files)}>
                        Extract
                    </button>
                )}

                {result && Array.isArray(result) && (
                <div>
                    {result.map((offer, index) => (
                    <div key={index}>
                        <h2>Offer Information</h2>
                        <h3>Offer {index + 1}</h3>
                        {OFFER_FIELDS.map(({ key, label }) => {
                            const value = offer[key]
                            if (!value) return null

                            return (
                                <p key={key}>
                                <strong>{label}:</strong> {value}
                                </p>
                            )
                        })}
                    </div>
                    ))}
                </div>
                )}
            </ul>
        </form>
    )
}

export default MyDropzone