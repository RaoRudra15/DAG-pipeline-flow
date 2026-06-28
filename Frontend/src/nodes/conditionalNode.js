import { Position } from 'reactflow';
import { BaseNode } from './baseNode';

export const ConditionNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="If / Else"
      theme="bg-orange-600" 
      handles={[
        { type: 'target', position: Position.Left, id: `${id}-input` },
        { type: 'source', position: Position.Right, id: `${id}-true`, style: { top: '30%' } },
        { type: 'source', position: Position.Right, id: `${id}-false`, style: { top: '70%' } }
      ]}
    >
      <div className="flex flex-col justify-between h-full py-1">
        {               }
        <p className="text-xs text-gray-600 leading-relaxed">
          Evaluates a condition and branches the workflow.
        </p>
        
        {                      }
        <div className="text-[10px] text-gray-400 font-medium tracking-wider text-right mt-3 border-t border-gray-100 pt-1.5 uppercase">
          Top: <span className="text-emerald-600 font-semibold">True</span> | Bottom: <span className="text-rose-600 font-semibold">False</span>
        </div>
      </div>
    </BaseNode>
  );
};