import React, { useState } from 'react'
import NavBar from './components/NavBar'


export default function App() {


  const increaseX = ()=>{
    setX(x+1);
  }
  const [x,setX] = useState(0);

       

  return (
    <div>
       <NavBar var={x} fn={setX } />


       <button type="submit" onClick={  increaseX
            } className="btn btn-primary">INCREMENT</button>
    </div>
  )
}
