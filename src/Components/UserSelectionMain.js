import { useContext, useState, useEffect } from "react";
import { Context } from "../Store/appContext";
import DescriptionMuiModal from "./DescriptionMuiModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faCircleInfo, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const UserSelectionMain = (props) => {
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
    actions.getMains();
  }, []);

  let savedMains = store.saved_mains;
  let today = store.saved_date;
  let mainsOfToday = savedMains.filter(function (main) {
    return main.date == today;
  })

  return (
    <div className="flex-column mb-3 forms col">
      <div className="flex-column">
        <h1 className="fs-6 option-text text-center">Platos de Fondo:</h1>
        <ul className="list-group text-start">
          {mainsOfToday.map((item, index) => {
            return (
              <li
                className="list-group-item d-flex justify-content-between"
                key={index}
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
                    onClick={()=>actions.handleSelection("main_id", item.id, item.name, item.date)}
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

export default UserSelectionMain;
