import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './baseNode';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data?.inputType || 'Text');

  return (
    <BaseNode
      id={id}
      title="Input"
      theme="bg-emerald-600" 
      handles={[
        { type: 'source', position: Position.Right, id: `${id}-value` }
      ]}
    >
      <div className="flex flex-col gap-3">
        {                    }
        <div className="flex flex-col gap-1">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Name:</span>
          <input 
            type="text" 
            value={currName} 
            onChange={(e) => setCurrName(e.target.value)} 
            className="w-full p-1.5 text-xs border border-gray-300 rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        {                     }
        <div className="flex items-center justify-between gap-2 mt-1">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Type:</span>
          <select 
            value={inputType} 
            onChange={(e) => setInputType(e.target.value)}
            className="p-1 text-xs border border-gray-300 rounded bg-white font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </div>
      </div>
    </BaseNode>
  );
}