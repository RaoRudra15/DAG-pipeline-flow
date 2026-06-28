import { useState, useEffect, useRef } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './baseNode';
import { useStore } from '../store';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const [nodeWidth, setNodeWidth] = useState(256); 
  const textareaRef = useRef(null);
  
  const updateNodeField = useStore((state) => state.updateNodeField);

  
  useEffect(() => {
    if (textareaRef.current) {
      
      textareaRef.current.style.height = 'auto'; 
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; 

      
      const lines = currText.split('\n');
      const longestLine = lines.reduce((max, line) => line.length > max.length ? line : max, '');
      
      
      
      const calculatedWidth = Math.min(Math.max(256, longestLine.length * 8 + 48), 600);
      setNodeWidth(calculatedWidth);
    }
  }, [currText]);

  
  useEffect(() => {
    const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
    const matches = new Set(); 
    let match;
    
    while ((match = regex.exec(currText)) !== null) {
      matches.add(match[1]);
    }
    setVariables(Array.from(matches));
  }, [currText]);

  const handleTextChange = (e) => {
    const value = e.target.value;
    setCurrText(value);
    updateNodeField(id, 'text', value);
  };

  const handles = [
    { type: 'source', position: Position.Right, id: `${id}-output` }
  ];

  variables.forEach((variable, index) => {
    handles.push({
      type: 'target',
      position: Position.Left,
      id: `${id}-${variable}`,
      style: { top: `${((index + 1) * 100) / (variables.length + 1)}%` } 
    });
  });

  return (
    <BaseNode 
      id={id} 
      title="Text" 
      theme="bg-blue-500" 
      handles={handles}
      widthStyle={{ width: `${nodeWidth}px` }} 
    >
      <label className="font-semibold text-xs text-gray-500 uppercase tracking-wider">Text Input:</label>
      <textarea 
        ref={textareaRef}
        value={currText} 
        onChange={handleTextChange} 
        className="w-full min-h-[60px] p-2 border border-gray-300 rounded text-xs text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none overflow-hidden bg-gray-50 font-mono"
      />
    </BaseNode>
  );
};