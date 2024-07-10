import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

interface FileUploadProps {
    onUpload: (uploadedDocuments: any) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onUpload }) => {
    const [files, setFiles] = useState<File[]>([]);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles);
        }
    });

    const handleUpload = async () => {
        const formData = new FormData();
        files.forEach(file => {
            formData.append('files', file);
        });
        const response = await axios.post('/api/documents/', formData);
        onUpload(response.data);
    };

    return (
        <div>
            <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default FileUpload;