import { useContext, useState, useEffect } from "react";
import DescriptionModal from "./DescriptionModal";
import DescriptionMuiModal from "./DescriptionMuiModal";
import { Context } from "../Store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import zIndex from "@mui/material/styles/zIndex";

const UserSelectionStarter = (props) => {
  const { actions, store } = useContext(Context);

  const [open, setOpen] = useState([false, false, false]);

  const handleOpen = (i) => {
    setOpen(
      open.map((e, index) => {
        if (i === index) {
          return true;
        } else {
          return false;
        }
      })
    )
  };

  const handleClose = (i) => {
    setOpen(
      open.map((e, index) => {
        if (i === index) {
          return false;
        } else {
          return true;
        }
      })
    )
  };

  useEffect(() => {
    actions.getStarters();
  }, []);

  let savedStarters = store.saved_starters;
  let today = store.saved_date;
  let startersOfToday = savedStarters.filter(function (starter) {
    return starter.date == today});

  /* const handleModal = (index) => {
  setOpen([...open, false])
  };

  useEffect (() => {
    handleModal();
  }, []); */

  return (
    <div className="flex-column mb-3 forms col">
      <div className="flex-column">
        <h1 className="fs-6 navbar-text text-center">Entradas:</h1>
        <ul className="list-group text-start">
          {startersOfToday.map((item, index) => 
          {return(
              <li
                className="list-group-item d-flex justify-content-between"
                key={index}
                name="starter"
              >
               <DescriptionMuiModal open={open[index]} onClose={()=> handleClose(index)} description={item.description} /> 
                <span className="d-flex align-items-center">{item.name}</span>
                <span>
                  &nbsp;
                  <button
                    type="button"
                    className="btn btn-outline-success"
                    onClick={()=>handleOpen(index)}
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
      </div>
    </div>
  );
};

export default UserSelectionStarter;
