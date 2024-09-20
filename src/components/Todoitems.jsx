import React from 'react'
import tick from "../assets/tick.png"
import not_tick from "../assets/not_tick.png"
import delete_icon from "../assets/delete.png"

const Todoitems = ({item ,handleDelete , handleCheck  }) =>{
  const {id, todo, isCompleted} = item

  return ( todo.length >3 && <div    className='flex py-[.35rem] select-none  gap-2 items-center'>
    <div className='flex items-center flex-1 gap-5'>
      <img onClick={()=>handleCheck(id)} className='w-6 h-6 cursor-pointer' src={isCompleted ?  tick : not_tick} alt="" />
      <p onClick={()=>handleCheck(id)} className={`text-lg ${isCompleted ?  'line-through' : ''}`}>{todo}</p>
    </div>    
    <img onClick={()=>handleDelete(id)} className='w-5 h-5 cursor-pointer' src={delete_icon} alt="" />
</div>
   
  )
}
export default Todoitems  