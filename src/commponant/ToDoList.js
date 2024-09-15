import ToDoCard from "./ToDoCard";

function ToDoList(props){

const {toDoList}=props;


return(
<ul className="main">
{toDoList.map((item,itemIndex)=>{

return(<ToDoCard index={itemIndex} {...props} key={itemIndex} ><p>{item}</p></ToDoCard>)



})}



</ul>







)


}
export default ToDoList;