import ToDoItem from "./ToDoItem";
function ToDoList({filter,toggleComplete,editText,deleteTodo})
{
    return(
        <>
            <div className="bg-white p-4 rounded shadow">
           
      {filter.length === 0 ? (
        <p className="text-gray-500 text-center">No tasks to show.</p>
      ) : (
        filter.map((todo) => (    
          <ToDoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            editText={editText}
            deleteTodo={deleteTodo}        
          />
        )))}
        </div>      
        </>
    )
}
export default ToDoList;