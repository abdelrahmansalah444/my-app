function ToDoCard(props)
{
    const{handelDelete,children,index,handleEdite}=props;

    return(<li className="todoItem">
        {children} 
        <div className="actionsContainer">
        <button onClick={()=>{handleEdite(index)}} ><i class="fa-solid fa-pen-to-square"></i></button>
        
      <button onClick={()=>{handelDelete(index)}}><i class="fa-solid fa-trash"></i></button>  
        </div>
        </li>)
}
export default ToDoCard;