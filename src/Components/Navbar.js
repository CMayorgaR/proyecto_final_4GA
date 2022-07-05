const Navbar = (props) => {
  return <>
  <nav className="navbar">
    <div className="container-fluid">
      <a className="navbar-brand text-success navbar-title">MM</a>
      <span className="navbar-text">{props.title}</span>
      <span className="d-flex">
        <button className="btn btn-outline-success navbar-text" href="#">
          Regresar
        </button>
      </span>
    </div>
  </nav>
  </>
};


export default Navbar;