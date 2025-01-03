import { useState } from "react";

function ToDoItem({ todo, toggleComplete,editText,deleteTodo }) {
  const [isEditing, setEditing] = useState(false);
  const [edited, setEdited] = useState(todo.text);

  function handleEdit() {
    editText(todo.id, edited);
    setEditing(false);
  }
   

  return (
    <>
      <div className="flex items-center justify-between py-2 border-b">
        
        {isEditing ? (
          <input
            type="text"
            value={edited}
            onChange={(e) => setEdited(e.target.value)}
            className="flex-1 px-2 py-1 border rounded"
          />
        ) : (
          <span
            className={`flex-1 ${
              todo.completed ? "line-through text-gray-400" : "text-gray-700"
            }`}
          >
            {todo.text}
          </span>
        )}

      
        <div className="flex items-center space-x-2">
          {isEditing ? (
            <button
              onClick={handleEdit}
              className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => setEditing(true)}
              className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
            >
              Edit
            </button>
          )}

         
          <button
            onClick={() => toggleComplete(todo.id)}
            className={`px-2 py-1 rounded ${
              todo.completed
                ? "bg-blue-500 text-white hover:bg-blue-600"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          >
            {todo.completed ? "Undo" : "Complete"}
          </button>
          <button
          onClick={() => deleteTodo(todo.id)}
          className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
        >
          Delete
        </button>
        </div>
      </div>
    </>
  );
}


export default ToDoItem;
