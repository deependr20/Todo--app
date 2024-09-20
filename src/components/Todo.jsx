import React, { useEffect, useState } from "react";
import todo_icon from "../assets/todo_icon.png";
import Todoitems from "./Todoitems";
import { v4 as uuidv4 } from 'uuid';

const Todo = () => {

  const [todo, settodo] = useState("")
  const [todos, settodos] = useState([])

  const handleinput = (e) => {
    settodo(e.target.value)
    console.log(todo)
  };
  
  const handleAdd = () => {
    settodos([...todos , {todo , isCompleted : false , id : uuidv4()}])
    // settodos((prev)=>[...prev , {todo , isCompleted : false , id : uuidv4()}])  //both method are corret
    settodo("")
  }
  
  const handleDelete = (id)=>{
      settodos(todos.filter(item=> item.id != id))  //jo id barabar nhi h woh aa jayegi
  }

  const handleCheck =(id)=>{
    settodos(todos.map(item=>
      item.id ==id ? {...item , isCompleted : !item.isCompleted} : item
    ))
  }                                 

  useEffect(() => {
    const localTodos = JSON.parse(localStorage.getItem("todos"));
    localTodos &&  settodos(localTodos)
  }, [])

 useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
 }, [todos])
  
  return (
    <div className="bg-slate-100 min-w-[26rem] max-w-[35rem] min-h-[74%] flex flex-col rounded-lg pt-8 px-6 ">
      <div className="flex">
        <img className="w-8 h-8" src={todo_icon} alt="" />
        <h1 className="text-2xl font-semibold">To-do list</h1>
      </div>
      <div className="flex bg-slate-200 items-center justify-center rounded-full mt-6 mb-8">
        <input
          onChange={handleinput}
          value={todo}
          className="bg-slate-200  outline-none border-0 flex-1 ml-3 "
          type="text"
          placeholder="Add your task"
        />
        <button  onClick={handleAdd} className="bg-violet-700 text-white rounded-full text-sm px-6 py-3">
          Add task
        </button>
      </div>
      <>
         {todos.map(item => 
            <Todoitems key={item.id}   handleDelete={handleDelete} handleCheck={handleCheck} item={item}/>
         )}
      </>
    </div>
  );
};

export default Todo;
