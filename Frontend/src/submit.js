import { useState } from 'react';
import { useStore } from './store';
import { shallow } from 'zustand/shallow';

export const SubmitButton = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { nodes, edges } = useStore((state) => ({
        nodes: state.nodes,
        edges: state.edges
    }), shallow);

    const handleSubmit = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('http://127.0.0.1:8000/pipelines/parse', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nodes, edges })
            });

            if (!response.ok) throw new Error('Network error');

            const data = await response.json();

            alert(
                `🎉 Pipeline Analyzed!\n\n` +
                `Nodes: ${data.num_nodes}\n` +
                `Edges: ${data.num_edges}\n` +
                `Is a Valid DAG? ${data.is_dag ? '✅ Yes' : '❌ No (Cycles Detected)'}`
            );
        } catch (error) {
            console.error(error);
            alert("⚠️ Failed to submit pipeline. Ensure your backend is running.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center m-5">
            <button 
                onClick={handleSubmit}
                disabled={isLoading}
                className={`px-6 py-2 text-white font-semibold rounded-lg shadow-md transition-colors ${
                    isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'
                }`}
            >
                {isLoading ? 'Analyzing...' : 'Submit Pipeline'}
            </button>
        </div>
    );
};