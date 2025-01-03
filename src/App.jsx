import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import './index.css'
import './App.css'
import ToDoList from './components/ToDoList'

function App() {
  const [searchText,setSearchText]=useState("");
  const [filter,setFilter]=useState([]);
  function addTask()
  {
    if (searchText.trim() === "") return;
    setFilter([...filter,
      {id:Date.now(),text:searchText,completed:false}
    ]);
    setSearchText("");
  }
  //console.log(setSearchText);
  const toggleComplete = (id) => {
    setFilter((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  //for editing text
  const editText=(id,newText)=>
  {
    setFilter(
      filter.map((filler)=>
     
        filler.id=== id? {...filler,text:newText}:filler
      )
    )
  }

  const deleteTodo = (id) => {
    setFilter(filter.filter((todo) => todo.id !== id));
  };
  
  return (
    <>
        <Header/>
        <div className='max-w-md mx-auto mt-6'>
          <div className="flex mb-4">
          <input type="text"
          onChange={(e)=>{setSearchText(e.target.value)}}
           className="flex-1 px-4 py-2 border rounded-l-lg focus:outline-none" />
           <button className='bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600'
           onClick={addTask}
           >ADD</button>

          </div>
        </div>
      <ToDoList 
      filter={filter}
      toggleComplete={toggleComplete}
      editText={editText}
      deleteTodo={deleteTodo}     
      />    
    </>
  )
}

export default App;
