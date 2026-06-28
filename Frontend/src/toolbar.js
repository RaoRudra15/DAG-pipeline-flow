import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
    return (
        <div className="w-full p-4 bg-white border-b border-gray-200 shadow-sm select-none">
            {                                   }
            <div className="flex flex-wrap items-center gap-3">
                
                {                        }
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                
                {                                       }
                <DraggableNode type='api' label='API Request' />
                <DraggableNode type='condition' label='If / Else' />
                <DraggableNode type='math' label='Math' />
                <DraggableNode type='note' label='Note' />
                <DraggableNode type='database' label='Database' />
                
            </div>
        </div>
    );
};