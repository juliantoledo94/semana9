
import './App.css'
import Button from './Button'
import Header from "./Header"
import TodoList from './TodoList'
import TodoItem from './TodoItem'


function App() {

  const handleClick = () =>{
    console.log("click")
  }

  return (
    <div>
      <Button text="boton1" color="pink" handleClick={handleClick}/>
      <Button text="boton2" color="green" handleClick={handleClick}/>
      <Header>
        <div>
          <h1>Hola soy un header</h1>
          <h2>Hola soy el subtitulo</h2>
        </div>
      </Header>
      <TodoList>
        <TodoItem text="tarea1"/>
        <TodoItem text="tarea2"/>
        <TodoItem text="tarea3"/>
      </TodoList>
    

      
       
      

      
    </div>
  )
}

export default App
