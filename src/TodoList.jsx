<<<<<<< HEAD
import TodoListItem from "./TodoListItem";

=======
>>>>>>> 631dd58d07eca280419a094be11b2a03780edaa4
const todoList = [
    {
      id: 1,
      title: 'React lesson',
    },
<<<<<<< HEAD
=======
  
>>>>>>> 631dd58d07eca280419a094be11b2a03780edaa4
    {
      id: 2,
      title: 'Shopping',
    },
<<<<<<< HEAD
=======
  
>>>>>>> 631dd58d07eca280419a094be11b2a03780edaa4
    {
        id: 3,
        title: 'Homework',
    },
  
<<<<<<< HEAD
];

function TodoList() {
    return (
    <ul>
        {todoList.map(todo => (
        <TodoListItem key={todo.id} todo={todo} />
        ))}
    </ul>
    );
=======
  ];
  

function TodoList() {
    return(
        <ul>
        {todoList.map(function(item) {
            return <li key={item.id}>{item.title}</li>
        })}
        </ul>
    )
>>>>>>> 631dd58d07eca280419a094be11b2a03780edaa4
}


export default TodoList;