import { useContext, useState, useEffect } from "react";
import DescriptionMuiModal from "./DescriptionMuiModal";
import { Context } from "../Store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faCircleInfo } from "@fortawesome/free-solid-svg-icons";


const UserSelectionStarter = () => {
  
  const { actions, store } = useContext(Context);

  const [open, setOpen] = useState(false);

  const [description, setDescription] = useState("")

  const handleOpen = (description) => {
    setOpen(true)
    setDescription(description)
  };

  const handleClose = () => {
    setOpen(false)
  };

  useEffect(() => {
    actions.getStarters();
  }, []);

  let savedStarters = store.saved_starters;
  let today = store.saved_date;
  let startersOfToday = savedStarters.filter(function (starter) {
    return starter.date == today});

  return (
    <div className="flex-column mb-3 forms col">
      <div className="flex-column">
        <h1 className="fs-6 option-text text-center">Entradas:</h1>
        <ul className="list-group text-start">
          {startersOfToday.map((item, index) => 
          {return(
              <li
                className="list-group-item d-flex justify-content-between"
                key={index}
                name="starter"
              >
                
                <span className="d-flex align-items-center">{item.name}</span>
                <span>
                  &nbsp;
                  <button
                    type="button"
                    className="btn btn-outline-success"
                    onClick={()=>handleOpen(item.description)}
                  >
                    <FontAwesomeIcon icon={faCircleInfo} />
                  </button>
                  &nbsp;
                  <button
                    type="button"
                    className="btn btn-outline-success"
                    onClick={() => actions.handleSelection("starter_id", item.id, item.name)}
                  >
                    <FontAwesomeIcon icon={faCirclePlus} />
                  </button>
                </span>  
              </li>
            );
            })}
        </ul>
        <DescriptionMuiModal open={open} onClose={()=> handleClose()} description={description} />
      </div>
    </div>
  );
};

export default UserSelectionStarter;
