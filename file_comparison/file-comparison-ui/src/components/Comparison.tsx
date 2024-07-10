import React, { useState } from 'react';
import axios from 'axios';

interface ComparisonProps {
    documents: any;
}

const Comparison: React.FC<ComparisonProps> = ({ documents }) => {
    const [result, setResult] = useState<string | null>(null);
    const [threshold, setThreshold] = useState<number>(70);
    const [keywords, setKeywords] = useState<string>('');

    const handleCompare = async () => {
        const response = await axios.post('/api/compare/', {
            documents,
            threshold,
            keywords
        });
        setResult(response.data);
    };

    return (
        <div>
            <input
                type="number"
                value={threshold}
                onChange={e => setThreshold(Number(e.target.value))}
                placeholder="Similarity Threshold"
            />
            <input
                type="text"
                value={keywords}
                onChange={e => setKeywords(e.target.value)}
                placeholder="Keywords"
            />
            <button onClick={handleCompare}>Compare</button>
            {result && <div>{result}</div>}
        </div>
    );
};

export default Comparison;
