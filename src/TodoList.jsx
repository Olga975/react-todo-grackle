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
    return(
        <ul>
        {todoList.map(function(item) {
            return <li key={item.id}>{item.title}</li>
        })}
        </ul>
    )
}


export default TodoList;