import React from "react";

function TodoListItem({ todo, onRemoveTodo }) {
    const handleRemoveClick = () => {
        onRemoveTodo(todo.id);
    };
    return (
        <li>
            {todo.title}
            <button type="button" onClick={handleRemoveClick}>Remove</button>
        </li>
    );
}

export default TodoListItem;
