import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBellConcierge, faArrowRightFromBracket  } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const Navbar = (props) => {
  let navigate = useNavigate();
  return <>
  <nav className="navbar">
    <div className="container-fluid">
      <a className="navbar-brand text-success navbar-title">MM <FontAwesomeIcon icon={faBellConcierge} style={{fontSize:"30px", color:"green"}}/></a>
      <span className="navbar-text">{props.title}</span>
      <span className="d-flex">
        <Link to={props.link} className="btn btn-outline-success navbar-text">
        <FontAwesomeIcon icon={faArrowRightFromBracket} />
        </Link>  
      </span>
    </div>
  </nav>
  </>
};

export default Navbar;