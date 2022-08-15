import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBellConcierge, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import Logo5 from "../Assets/Logo5.png"
import { Link, useNavigate } from "react-router-dom";

const NavbarLogOut = (props) => {
  let navigate = useNavigate();
  return <>
    <nav className="navbar">
      <div className="container-fluid">
      <span><img src= {Logo5}/></span>
        <span className="navbar-text">{props.title}</span>
        <span className="d-flex">
          <button onClick={() => { navigate('/'); localStorage.clear() }} className="btn btn-outline-success navbar-text" href="#">
            Log out
          </button>
        </span>
      </div>
    </nav>
  </>
};



export default NavbarLogOut;