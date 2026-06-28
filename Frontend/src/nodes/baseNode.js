import { Handle } from 'reactflow';

export const BaseNode = ({ id, title, children, handles = [], theme = 'bg-blue-600', widthStyle = { width: '16rem' } }) => {
  return (
    <div 
      style={widthStyle} 
      className="rounded-xl shadow-md bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200"
    >
      {                  }
      <div className={`px-4 py-2 ${theme} text-white text-sm font-semibold tracking-wide flex items-center`}>
        <span>{title}</span>
      </div>
      
      {                }
      <div className="p-4 flex flex-col gap-2 text-gray-700 text-sm">
        {children}
      </div>
      
      {           }
      {handles.map((h, index) => (
        <Handle
          key={`${id}-handle-${index}`}
          type={h.type}
          position={h.position}
          id={h.id}
          style={{ 
            ...h.style, 
            width: '12px', 
            height: '12px', 
            backgroundColor: 'white', 
            border: '2px solid #4f46e5' 
          }}
        />
      ))}
    </div>
  );
};