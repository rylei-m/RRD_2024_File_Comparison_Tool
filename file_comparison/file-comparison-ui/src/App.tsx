import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import Comparison from './components/Comparison';

const App: React.FC = () => {
    const [documents, setDocuments] = useState<any[]>([]);

    const handleUpload = (uploadedDocuments: any) => {
        setDocuments(uploadedDocuments);
    };

    return (
        <div>
            <FileUpload onUpload={handleUpload} />
            {documents.length > 0 && <Comparison documents={documents} />}
        </div>
    );
};

export default App;
