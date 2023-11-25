import React from 'react'

function NavBar(props) {



    console.log(props.var);
  return (
    <div>
        <h1 className='m-5'> HELLO FROM THE NAVBAR/ a different component other than APP.jsx</h1>

            <div className='container'>
             <form>
            
                
            <div className="mb-3 form-check">
               {props.var} 
               </div>
            <button type="submit" onClick={  ()=>
                props.fn(prevState => prevState + 10)
            } className="btn btn-primary">Change to 10</button>
            </form>
            </div>

    </div>
  )
}

export default NavBar
