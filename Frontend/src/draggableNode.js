export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      className={`${type} flex flex-col items-center justify-center h-12 px-4 rounded-lg bg-slate-800 text-white shadow-sm hover:bg-slate-700 hover:shadow transition-all duration-150 cursor-grab select-none`}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
      draggable
    >
      <span className="text-xs font-medium tracking-wide">{label}</span>
    </div>
  );
};