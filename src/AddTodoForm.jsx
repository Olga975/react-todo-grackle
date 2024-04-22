import { useState } from "react";
import InputWithLabel from "./InputWithLabel";

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
            <InputWithLabel 
                id="todoTitle" 
                value={todoTitle}
                onChange={handleTitleChange} 
                name="Title: "
            >
                Title:
            </InputWithLabel>
            <button>Add</button>
        </form>
    );
}

export default AddTodoForm;