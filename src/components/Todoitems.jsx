import './CSS/TodoItems.css'
import tick from '../Assets/tick.png'
import not_tick from "../Assets/not_tick.png";
import cross from "../Assets/cross.png";

function Todoitems({itemVal,setTodos}) {

    const deleteItem = (number)=>{
        let data = JSON.parse(localStorage.getItem("todos"));
        data = data.filter(   (todoItem)=> todoItem.no !== number );
        setTodos(data);
    }


    const toggle = (no) => {

        let data = JSON.parse(localStorage.getItem("todos"));
        //alert(no);
        for(let i = 0; i < data.length;i++)
          { 

            console.log(no+" "+data[i].no);

                if (data[i].no===no) {
                    console.log("dddddddddd");
                    if (data[i].display==="") 
                    data[i].display = "line-through";
                    else 
                    data[i].display = "";

                    break;
                }
               
                
        }
        setTodos(data);
   }

    return (

        <div className='todoitems'  >
        
            <div className="todoitems-container" key={itemVal.no} >

                <div onClick={()=>{ toggle(itemVal.no)}}>
                {itemVal.display==="" ?
                (
                    <img src={not_tick} alt=""  className='image-tick_cross' /> 
                ):(
                    <img src={tick} alt="" className='image-tick_cross' />
                ) }
             
             </div>
                
                <div className={`todoitems-text ${itemVal.display}`}>{itemVal.text}
                </div>

                <img src={cross} className="todo-cross" alt="" onClick={()=>{ deleteItem(itemVal.no)}}/>

            </div>
            
      
        
        </div>
        )
}

export default Todoitems
