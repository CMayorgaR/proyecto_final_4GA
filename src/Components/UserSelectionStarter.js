import { useContext, useState, useEffect } from "react";
import DescriptionModal from "./DescriptionModal";
import DescriptionMuiModal from "./DescriptionMuiModal";
import { Context } from "../Store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const UserSelectionStarter = (props) => {
  const { actions, store } = useContext(Context);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true)
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
    return starter.date == today;
  });

  return (
    <div className="flex-column mb-3 forms col">
      <div className="flex-column">
        <h1 className="fs-6 navbar-text text-center">Entradas:</h1>
        <ul className="list-group text-start">
          {startersOfToday.map((item, index) => {
            return (
              <li
                className="list-group-item d-flex justify-content-between"
                key={index}
                name="starter"
              >
               <DescriptionMuiModal open={open} onClose={()=> handleClose()} description={item.description} /> 
                <span className="d-flex align-items-center">{item.name}</span>
                <span>
                  &nbsp;
                  <button
                    type="button"
                    className="btn btn-outline-success"
                    onClick={()=>handleOpen()}
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
            );})}
        </ul>
      </div>
    </div>
  );
};

export default UserSelectionStarter;
