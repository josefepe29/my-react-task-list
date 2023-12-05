import { useState, useContext } from "react";
import {
  BsTrash,
  BsCircle,
  BsPencilSquare,
  BsCheckCircle,
  BsFillCaretDownFill,
  BsCheckLg,
} from "react-icons/bs";
import { DataContext } from "../context/Data";
import JSConfetti from "js-confetti";
import swal from "sweetalert";

export const Task = (props) => {
  const jsConfetti = new JSConfetti();

  const { handleDeleteTask, handleEditTask, handleUpdateStatus } =
    useContext(DataContext);

  const { id, title, description, status } = props;

  const [stat, setStat] = useState(status);
  const [showNewIconTitle, setShowNewIconTitle] = useState(false);
  const [showNewIconDescription, setShowNewIconDescription] = useState(false);
  const [inputTitleValue, setInputTitleValue] = useState("");
  const [inputDescriptionValue, setInputDescriptionValue] = useState("");
  const [collapse, setCollapse] = useState(true);

  const lineThrough = stat ? "line-through" : "";
  const decoration = stat ? "check" : "";
  const background = stat ? "checked-background" : "";
  const collapseDescription = collapse ? "collapse-description" : "";
  const iconDecoration = stat ? <BsCheckCircle /> : <BsCircle />;

  //Handle para capturar valores del titulo de la tarea
  const handleInputTitleChange = (event) => {
    const value = event.target.value;
    setInputTitleValue(value);
  };

  //Toggle del icono de edicion y de check
  const handleEditIconTitleOnClick = () => {
    setShowNewIconTitle(showNewIconTitle ? false : true);
  };

  //Handle para enviar los datos editados del titulo al padre(TaskList)
  const handleSubmitEditTitle = (e) => {
    e.preventDefault();
    if (inputTitleValue) {
      const data = {
        id: id,
        title: inputTitleValue,
        description: description,
        status: false,
      };
      //envia data al padre (TaskList)
      handleEditTask(id, data);
    }
    //Reinicia los valores del input de title
    setInputTitleValue("");
    setShowNewIconTitle(showNewIconTitle ? false : true);
  };

  //Toggle del icono de edicion y de check
  const handleEditIconDescriptionOnClick = () => {
    setShowNewIconDescription(showNewIconDescription ? false : true);
  };

  //Handle para capturar valores de la descripcion de la tarea
  const handleInputDescriptionChange = (event) => {
    const value = event.target.value;
    setInputDescriptionValue(value);
  };

  //Handle para enviar los datos editados de la tarea al padre(TaskList)
  const handleSubmitEditDescription = (e) => {
    e.preventDefault();
    if (inputDescriptionValue) {
      const data = {
        id: id,
        title: title,
        description: inputDescriptionValue,
        status: false,
      };
      //envia data al padre (TaskList)
      handleEditTask(id, data);
    }
    //Reinicia los valores del input de description
    setInputDescriptionValue("");
    setShowNewIconDescription(showNewIconDescription ? false : true);
  };

  //Hace un toggle del estado y lo envia a traves de una funcion dada por parametro al padre (TaskList)
  const handleCompleteClick = () => {
    setStat(stat ? false : true);
    if (!stat) {
      //Confirmacion de estado completado
      jsConfetti.addConfetti();
    }
    handleUpdateStatus(id, !stat);
  };

  //Handle para colapsar las tareas
  const handleCollapseOnClick = () => {
    setCollapse(collapse ? false : true);
  };

  //Envia el id al padre a traves de una funcion dada por parametro al padre (TaskList)
  const handleDeleteClick = () => {
    //Confirmacion de eliminacion
    swal({
      title: "Eliminar",
      text: "Estas seguro que deseas eliminar esta tarea?",
      icon: "warning",
      buttons: ["Cancelar", "Aceptar"],
    }).then((response) => {
      if (response) {
        handleDeleteTask(id);
      }
    });
  };

  return (
    <li>
      <article className="task-title" id={background}>
        <div className="icon-container">
          <button
            className="icon"
            id={decoration}
            onClick={handleCompleteClick}
          >
            {iconDecoration}
          </button>
          <button className="icon" onClick={handleCollapseOnClick}>
            <BsFillCaretDownFill />
          </button>
        </div>
        {!showNewIconTitle && (
          <p className={lineThrough} title="Task Title">
            <strong>{title}</strong>{" "}
          </p>
        )}
        {showNewIconTitle && (
          <input
            className="task-edit-input"
            name="title"
            id="input-title"
            onChange={handleInputTitleChange}
            placeholder={title}
            autoFocus
          />
        )}
        <div className="cont-button-icon">
          {!showNewIconTitle && (
            <button
              className="icon"
              id="edit-title-icon"
              onClick={handleEditIconTitleOnClick}
            >
              <BsPencilSquare />
            </button>
          )}
          {showNewIconTitle && (
            <button
              className="icon"
              id="edit-check-title-icon"
              onClick={handleSubmitEditTitle}
            >
              <BsCheckLg />
            </button>
          )}
          <button className="icon" id="trash-icon" onClick={handleDeleteClick}>
            <BsTrash />
          </button>
        </div>
      </article>
      {!showNewIconDescription && (
        <article className="task-description" id={collapseDescription}>
          <p className="description" title="Task description" id={background}>
            {description}
          </p>
          <button
            className="icon"
            id="edit-description-icon"
            onClick={handleEditIconDescriptionOnClick}
          >
            <BsPencilSquare />
          </button>
        </article>
      )}
      {showNewIconDescription && (
        <article className="task-description" id={collapseDescription}>
          <textarea
            className="task-edit-input-description"
            name="description"
            id="input-description"
            type="text"
            onChange={handleInputDescriptionChange}
            placeholder="Input your new description"
          />
          <button
            className="icon"
            id="edit-description-icon"
            onClick={handleSubmitEditDescription}
          >
            <BsCheckLg />
          </button>
        </article>
      )}
    </li>
  );
};
