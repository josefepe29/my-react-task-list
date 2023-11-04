import { useState } from "react";
import { BsTrash, BsCircle, BsPencilSquare, BsCheckCircle, BsFillCaretDownFill, BsCheckLg } from "react-icons/bs";


export const Task = (props) => {
    
    const {id,title, description,status,updateStat,deleteTask} = props
    
    const [stat, setStat] = useState(status)
    const [showNewIcon, setShowNewIcon] = useState(false);
    
    const [inputTitleValue, setInputTitleValue] = useState('');
    const [inputDescriptionValue, setInputDescriptionValue] = useState('');
    
    const lineThrough = stat ? "line-through" : ""
    const decoration = stat ? "check" : ""
    const iconDecoration = stat ? <BsCheckCircle /> : <BsCircle />


    //Handle para capturar valores del titulo de la tarea
    const handleInputTitleChange = (event) => {
        setInputTitleValue(event.target.value);
    };
    
    //Handle para capturar valores de la descripcion de la tarea
    const handleInputDescriptionChange = (event) => {
        setInputDescriptionValue(event.target.value);
    };

    const handleEditIconClick = () => {
        setShowNewIcon(showNewIcon ? false : true);
    };
    
    //Hace un toggle del estado y lo envia a traves de una funcion dada por parametro al padre (TaskList)
    const handleCompleteClick = () => {
        setStat(stat ? false : true)
        updateStat(id,!stat)
    }

    //Envia el id al padre a traves de una funcion dada por parametro al padre (TaskList)
    const handleDeleteClick = () => {
        deleteTask(id)
    }

    return (
        <li>

            <article className="task-title">
                
                <div className="icon-container">

                    <button className="icon" id={decoration} onClick={handleCompleteClick}>{iconDecoration}</button>
                    {/* <button className="icon"><BsFillCaretDownFill/></button> */}
                </div>
                {!showNewIcon && <p className={lineThrough}>{title} </p>}
                {showNewIcon && <input className="task-edit-input" name="title" id="input-title" onChange={handleInputTitleChange} autoFocus/>}
                <div className="cont-button-icon">
                    <button className="icon" id="edit-icon" onClick={handleEditIconClick}>{showNewIcon ? <BsCheckLg /> : <BsPencilSquare/>}</button>
                    <button className="icon" id="trash-icon" onClick={handleDeleteClick}><BsTrash/></button>
                </div>
            </article>
            {!showNewIcon && <article className="task-description">
                <p>{description}</p>
            </article>}
            {showNewIcon && <article className="task-description">
                <input className="task-edit-input-description" name="description" id="input-description" type="text" onChange={handleInputDescriptionChange}/>
            </article>}
        </li>

    )
}