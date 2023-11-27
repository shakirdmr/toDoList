import { useRef, useState } from "react"
import Todo from "./components/Todo";

export default function App() {

  const inputRef = useRef(1);
  const [items,setItems] = useState( [] );

  return (

    <div>

     <Todo />
    </div>
  )
}
