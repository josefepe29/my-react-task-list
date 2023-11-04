import { useState } from "react";
import {BsFillPlusSquareFill} from "react-icons/bs";


export const HeaderTask = (props) => {
  const { addTask } = props

  // Función para agregar una tarea
  
  const [inputTitleValue, setInputTitleValue] = useState('');
  const [inputDescriptionValue, setInputDescriptionValue] = useState('');


  //Handle para capturar valores del titulo de la tarea
  const handleInputTitleChange = (event) => {
    setInputTitleValue(event.target.value);
  };
  
  //Handle para capturar valores de la descripcion de la tarea
  const handleInputDescriptionChange = (event) => {
    setInputDescriptionValue(event.target.value);
  };
  
  //Realiza acciones con el submit para agregarlos a la lista de tareas
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      title: inputTitleValue,
      description: inputDescriptionValue,
      status:false
    };
    //envia data al padre (App)
    addTask(data)
    //Reinicia los valores de los inputs
    setInputTitleValue('')
    setInputDescriptionValue('')
  };
  
  //Agrega fecha actualizada en tiempo real
  const date = new Date()
  const dateFormat = new Intl.DateTimeFormat('en', { day:"numeric", month: "long", year:"numeric" })
  
  return (
    <>
      <section className="profile">
        <div id="date">{dateFormat.format(date)}</div>
        <h1> Hi, Jose Perez</h1>
        <span>Let's complete your goals!</span>
      </section>
      <form className="add-task">

        <input type="text" name="title" placeholder="add a task title" value={inputTitleValue} onChange={handleInputTitleChange}/>
        <input type="text" name="description" placeholder="add a task description" value={inputDescriptionValue} onChange={handleInputDescriptionChange} />
        <button type="submit" onClick={handleSubmit}><BsFillPlusSquareFill/></button>
      </form>
      
    </>
    )
}