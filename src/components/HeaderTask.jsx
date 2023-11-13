import { useState, useEffect } from "react";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { v4 as uuidv4 } from 'uuid';


export const HeaderTask = (props) => {
  const { addTask } = props

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);


  
  //Hooks para almacenar y actualizar el estado de los inputs title y description 
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
      id:uuidv4(),
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
        <span>{dateFormat.format(date)} {time.toLocaleTimeString()}</span>
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