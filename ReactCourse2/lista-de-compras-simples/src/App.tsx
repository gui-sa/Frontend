import { useState } from "react";
import style from "./App.module.css";

function App() {
  const [todo, setTodo] = useState<string[]>([])
  const [newTask, setNewTask] = useState<string>("");

  function reset(){
    setNewTask("");
  }

  function criarTarefa():void{
    if(newTask===""){
      alert("Por favor, digite uma descrição para sua tarefa");
      return;
    }
    setTodo([...todo, newTask]);
    reset();
  }

  function removerTarefa(index:number):void{
    if(todo[index]){
      const temp = [...todo];
      temp.splice(index,1);
      setTodo([...temp]);
    }
  }

  return (
    <div>
        <h1>TODO</h1>
        <hr></hr>
        <form>
          <label onSubmit={(e)=>{e.preventDefault()}}>
            <input 
              type="text" 
              name="newtask"  
              id="newtask" 
              placeholder="Digite aqui sua tarefa"
              value={newTask}
              onChange={(e)=>setNewTask(e.target.value)} />
            <button type="submit" onClick={criarTarefa}>Colocar na Fila</button>
          </label>
        </form>
        <hr></hr>

        {todo && todo.map((task, index)=>(
          <div
            className={style.container} 
            key={index}>
            <p>{task}</p>
            <button type="button" onClick={()=>{removerTarefa(index)}}>Excluir</button>
          </div>
        ))}
        
    </div>

  )
}

export default App
