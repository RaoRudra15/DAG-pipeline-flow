import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './baseNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data?.outputType || 'Text');

  return (
    <BaseNode
      id={id}
      title="Output"
      theme="bg-rose-600" 
      handles={[
        { type: 'target', position: Position.Left, id: `${id}-value` }
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
            className="w-full p-1.5 text-xs border border-gray-300 rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-rose-500"
          />
        </div>

        {                     }
        <div className="flex items-center justify-between gap-2 mt-1">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Type:</span>
          <select 
            value={outputType} 
            onChange={(e) => setOutputType(e.target.value)}
            className="p-1 text-xs border border-gray-300 rounded bg-white font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-rose-500 cursor-pointer"
          >
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </div>
      </div>
    </BaseNode>
  );
}