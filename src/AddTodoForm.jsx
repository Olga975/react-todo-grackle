function AddTodoForm(props) {
    function handleAddTodo(event) {
        event.preventDefault();
        const todoTitle = event.target.elements.title.value;
        props.onAddTodo(todoTitle);
        console.log(todoTitle);
        event.target.reset();
    }
    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title</label>
            <input type="text" id="todoTitle" name="title" />
            <button>Add</button>
        </form>
    );
}

export default AddTodoForm;
