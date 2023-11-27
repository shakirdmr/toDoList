import './CSS/Todo.css';

import React, { useEffect, useRef, useState } from 'react'
import Todoitems from './Todoitems';

let count=0;

function Todo() {

    
    const [todo, setTodo] = useState( [] );
    const inputRef = useRef(null);

    const addTodo = ()=>{
        setTodo( [...todo,{no:count++, text:inputRef.current.value, display:""}]);

        inputRef.current.value = "";
        localStorage.setItem("todos_count",count);
    }
    useEffect( ()=>{
        setTodo(JSON.parse (      localStorage.getItem("todos"))    );
        count  = localStorage.getItem("todos_count");
    },[])

    useEffect( ()=>{
        console.log(todo);

        setTimeout(() => {
            localStorage.setItem("todos",JSON.stringify(todo))
        }, 100);

    }, [todo]);

  return (
    <div className='todo'>

        <div className="todo-header">
            To Do List
        </div>

        <div className="todo-add">
             <input ref={inputRef} type="text" name="" id="" className='itemInput' maxLength={200}/>
             <div onClick={ ()=>{ addTodo() }} type="text" className="todo-add-btn" > ADD </div>
        </div>

      <div className="todo-list">
                        {todo.map( (item,index)=>{ 

                            return <Todoitems key={index} itemVal={item} setTodos={setTodo}/>

                            } )}
      </div>
        
   
    </div>
  )
}

export default Todo;
