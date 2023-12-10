import "./Navbar.css";
//import { Logo } from "../../assets/index";

export default function Navbar() {
  return (
    <div className="navbar navbar-expand-md bg-none navbar-light shadow-sm mb-3">
      <div className="container">
        <a href="#" className="navbar-brand">
          Pixel Fusion
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="#hero" className="nav-link">
                <button className="Button-black">Create</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
