import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";


const DeleteButton =()=>{
    return (
        <button type="button" className="btn btn-outline-success"><FontAwesomeIcon icon= {faTrashCan} /></button>
    )
};

export default DeleteButton;