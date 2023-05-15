import './App.css'
import Header from './Components/Header'
import TaskList from './Components/TaskList'

//Creamos la lista de tareas, con id y un estado
const taskList = [
  {
    id:1,
    title:"Buy a new gaming laptop",
    stat: false
  },

  {
    id:2,
    title:"Complete a previous task",
    stat: false
  },

  {
    id:3,
    title:"Create a video for YouTube",
    stat: false
  },

  {
    id:4,
    title:"Create a new portfolio site",
    stat: false
  },

];


function App() {

  //Esta función va a responder al boton de borrar todo
  function handleClear() {
    console.log("Clear All");
  };
  
  return (
    <div>
      <Header/>
      <TaskList list={taskList}/>
      <div>
        <p>You have {2} pending task</p>
        <button onClick={handleClear}>Clear all</button>
      </div>
    </div>
  )
}

export default App
