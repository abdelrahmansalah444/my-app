

function ToDoInPut(props){
    const{handelAddition,toDoValue,setToDoValue}=props
    
return (
  <header>
    <input value={toDoValue} onChange={(e)=>{ setToDoValue(e.target.value)}} placeholder="Enter to do....."/>
    <button onClick={()=>{handelAddition(toDoValue)
         setToDoValue('')}} >Add</button>
  </header>  
)

}


export default ToDoInPut;