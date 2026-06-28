import { useState } from 'react';
import { BaseNode } from './baseNode';

export const NoteNode = ({ id, data }) => {
  const [note, setNote] = useState(data?.note || '');

  return (
    <BaseNode
      id={id}
      title="Sticky Note"
      theme="bg-amber-500" 
      handles={[]} 
    >
      <div className="flex flex-col gap-1 py-0.5">
        {                       }
        <textarea 
          value={note} 
          onChange={(e) => setNote(e.target.value)} 
          placeholder="Type a note here..."
          className="w-full h-20 p-2 text-xs border border-amber-200 rounded-md bg-amber-50/40 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none overflow-y-auto"
        />
      </div>
    </BaseNode>
  );
};