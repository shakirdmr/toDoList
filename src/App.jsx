import { useRef, useState } from "react"

export default function App() {

  const inputRef = useRef(1);
  const [items,setItems] = useState( [] );

  return (

    <div>

     <div className="m-5">
      <input ref={inputRef}/>
      <button className="m-5" onClick={ ()=>{ setItems([...items,inputRef.current.value])} }>Submit</button>
     </div>
      
      {items.map( (item,key)=>{ return <h1 key={key}> {item}</h1> })    }
       
    </div>
  )
}
