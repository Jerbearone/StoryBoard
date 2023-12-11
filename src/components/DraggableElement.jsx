import { useState } from 'react';

const DraggableElement = ({ideaContent}) => {
  const [position, setPosition] = useState({ x: 200, y: 200 });

  const handleDragStart = (event) => {
    // Set the drag data to the ID of the dragged element
    event.dataTransfer.setData('text/plain', event.target.id);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    console.log("handed drop was called")


    // Get the dragged element
    const draggedElement = document.getElementById("draggableElement");
    console.log("Dragged Element: " + draggedElement)

    // Update the position in the state
    console.log(event.clientX, event.clientY);
    setPosition({
      x: event.clientX - draggedElement.clientWidth / 2,
      y: event.clientY - draggedElement.clientHeight / 2,
    });
  };

  return (
    <div
    className='story-idea-item'
      id="draggableElement"
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDrop}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      {ideaContent}
    </div>
  );
};

export default DraggableElement;

