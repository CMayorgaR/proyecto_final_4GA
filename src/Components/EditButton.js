import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const EditButton = () => {
    return (
        <button type="button" className="btn btn-outline-success"><FontAwesomeIcon icon= {faPenToSquare} /></button>
    )
};

export default EditButton;