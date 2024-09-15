
import './App.css';

import ToDoList from './commponant/ToDoList';
import ToDoInPut from './commponant/ToDoInput';
import ToDoCard from './commponant/ToDoCard';
import { useState } from 'react';
import { useEffect } from 'react';
function App() {


const [toDoList,settoDoList]=useState([  'Go to gym',
  'Play',]);
  const[toDoValue,setToDoValue]=useState('')
  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }))
  }

function handelAddition(newToDo){
const newToDoList=[...toDoList,newToDo]
persistData(newToDoList)
settoDoList(newToDoList)
}
function handelDelete(index){
  const newList=toDoList.filter(
    (toDoList,toDoIndex)=>{
      return toDoIndex!==index;
    }
  )
  persistData(newList)
  settoDoList(newList)
}
function handleEdite(index){
  const valueToEdite= toDoList[index]
  
  setToDoValue(valueToEdite)
  handelDelete(index)
}

useEffect(() => {
  if (!localStorage) {
    return
  }

  let localTodos = localStorage.getItem('todos')
  if (!localTodos) {
    return
  }

 
  localTodos = JSON.parse(localTodos).todos
  settoDoList(localTodos)

}, [])

  return (
    < >
     
       <ToDoInPut handelAddition={handelAddition} toDoValue={toDoValue} setToDoValue={setToDoValue}/>
      <ToDoList handleEdite={handleEdite} handelDelete={handelDelete} toDoList={toDoList}/>
      
    </>
  );
}

export default App;
