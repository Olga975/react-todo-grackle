import React from "react";
import removeIcon from './assets/removeIcon.png';

function TodoListItem({ todo, onRemoveTodo }) {
  const handleRemoveClick = () => {
    onRemoveTodo(todo.id);
  };
  return (
    <li>
      {todo.title}
      <button 
        type="button" 
        onClick={handleRemoveClick} 
        className="remove-button"
      >
        <img 
          src={removeIcon} 
          alt="Remove"
          width="10"
          height="10"
        />
      </button>
    </li>
  );
}

export default TodoListItem;
