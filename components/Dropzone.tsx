'use client'
import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import styles from '@/styles/dropzone.module.css'

function MyDropzone() {
    const [files, setFiles] = useState([]);
    const onDrop = useCallback(acceptedFiles => {
        if (acceptedFiles?.length) {
            setFiles(previousFiles => [
                ...previousFiles, 
                ...acceptedFiles.map(file =>
                    Object.assign(file, {preview: URL.createObjectURL(file)})
                )
            ]);
        }
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  function removeFile(name: string): void {
    setFiles(previousFiles => {
      const fileToRemove = previousFiles.find(file => file.name === name);
      if (fileToRemove?.preview) {
        URL.revokeObjectURL(fileToRemove.preview);
      }
      return previousFiles.filter(file => file.name !== name);
    });
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

export default MyDropzone;
