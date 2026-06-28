import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './baseNode';

export const ApiNode = ({ id, data }) => {
  const [method, setMethod] = useState(data?.method || 'GET');
  const [url, setUrl] = useState(data?.url || 'https://api.example.com');

  return (
    <BaseNode
      id={id}
      title="API Request"
      theme="bg-cyan-600" 
      handles={[
        { type: 'target', position: Position.Left, id: `${id}-trigger` },
        { type: 'source', position: Position.Right, id: `${id}-response` }
      ]}
    >
      <div className="flex flex-col gap-3">
        {                 }
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Method:</span>
          <select 
            value={method} 
            onChange={(e) => setMethod(e.target.value)}
            className="p-1 text-xs border border-gray-300 rounded bg-white font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 cursor-pointer"
          >
            <option value="GET">GET</option>
            <option value="POST">POST</option>
          </select>
        </div>

        {             }
        <div className="flex flex-col gap-1">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">URL:</span>
          <input 
            type="text" 
            value={url} 
            onChange={(e) => setUrl(e.target.value)} 
            className="w-full p-1.5 text-xs border border-gray-300 rounded font-mono bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>
      </div>
    </BaseNode>
  );
};