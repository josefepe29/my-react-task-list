import { BsTrash, BsCircle, BsPencilSquare, BsCheckCircle } from "react-icons/bs";


export const Task = (props) => {

    return (
        <li>
            <button className="icon" id={props.decoration=== "" ? "": "check"}>{ props.decoration=== "" ? <BsCircle/>: <BsCheckCircle/>}</button>
            <p className={props.decoration}>{props.description} </p>
            <div className="cont-button-icon">

                <button className="icon"><BsPencilSquare/></button>
                <button className="icon" id="trash-icon"><BsTrash/></button>
            </div>
        </li>
    )
}