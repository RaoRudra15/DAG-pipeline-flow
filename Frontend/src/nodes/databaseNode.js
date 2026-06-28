import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './baseNode';

export const DatabaseNode = ({ id, data }) => {
  const [dbName, setDbName] = useState(data?.dbName || 'UsersDB');

  return (
    <BaseNode
      id={id}
      title="Database"
      theme="bg-indigo-600" 
      handles={[
        { type: 'target', position: Position.Left, id: `${id}-query` },
        { type: 'source', position: Position.Right, id: `${id}-data` }
      ]}
    >
      <div className="flex flex-col gap-2">
        {                         }
        <div className="flex flex-col gap-1">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Collection:</span>
          <input 
            type="text" 
            value={dbName} 
            onChange={(e) => setDbName(e.target.value)} 
            className="w-full p-1.5 text-xs border border-gray-300 rounded font-mono bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>
    </BaseNode>
  );
};