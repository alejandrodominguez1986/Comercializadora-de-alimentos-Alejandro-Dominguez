import CartWidget from "./CartWidget";



const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success text-white">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold fst-italic  text-uppercase" href="#">
            Comercializadoras Fatto in casa 
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active fw-bold fst-italic text-uppercase" aria-current="page" href="#">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold fst-italic text-uppercase" href="#">
                  Contacto
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold fst-italic text-uppercase" href="#">
                  Productos
                </a>
              </li>
            </ul>
          <CartWidget />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;