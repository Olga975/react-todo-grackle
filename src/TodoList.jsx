import TodoListItem from "./TodoListItem";

const todoList = [
    {
      id: 1,
      title: 'React lesson',
    },
    {
      id: 2,
      title: 'Shopping',
    },
    {
        id: 3,
        title: 'Homework',
    },
  
];

function TodoList() {
    return (
    <ul>
        {todoList.map(todo => (
        <TodoListItem key={todo.id} todo={todo} />
        ))}
    </ul>
    );
}


export default TodoList;