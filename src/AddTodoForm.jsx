import { useState } from "react";

function AddTodoForm({ onAddTodo }) {

    const [todoTitle, setTodoTitle] = useState("");

    function handleTitleChange(event) {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    }

    function handleAddTodo(event) {
        event.preventDefault();
        const newTodo = {
            title: todoTitle,
            id: Date.now()
        };
        onAddTodo(newTodo);
        console.log(todoTitle);
        setTodoTitle("");
    }

    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title</label>
            <input
                type="text"
                id="todoTitle"
                name="title"
                value={todoTitle}
                onChange={handleTitleChange}
            />
            <button>Add</button>
        </form>
    );
}

export default AddTodoForm;