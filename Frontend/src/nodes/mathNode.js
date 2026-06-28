import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './baseNode';

export const MathNode = ({ id, data }) => {
  const [operation, setOperation] = useState(data?.operation || 'Add');

  return (
    <BaseNode
      id={id}
      title="Math Operation"
      theme="bg-teal-600" 
      handles={[
        { type: 'target', position: Position.Left, id: `${id}-a`, style: { top: '30%' } },
        { type: 'target', position: Position.Left, id: `${id}-b`, style: { top: '70%' } },
        { type: 'source', position: Position.Right, id: `${id}-result` }
      ]}
    >
      <div className="flex items-center justify-between gap-2 py-1">
        {                                }
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Op:</span>
        <select 
          value={operation} 
          onChange={(e) => setOperation(e.target.value)}
          className="p-1 text-xs border border-gray-300 rounded bg-white font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 cursor-pointer"
        >
          <option value="Add">Add</option>
          <option value="Subtract">Subtract</option>
          <option value="Multiply">Multiply</option>
        </select>
      </div>
    </BaseNode>
  );
};