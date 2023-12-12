import { Link } from "react-router-dom";
import "./Navbar.css";
//import { Logo } from "../../assets/index";

export default function Navbar() {
  return (
    <div className="navbar navbar-expand-md bg-none navbar-light shadow-sm mb-3">
      <div className="container">
        <Link className="navbar-brand" to={"/"}>
          Pixel Fusion
        </Link>
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
              <Link className="nav-link" to={"/create-post"}>
                <button className="Button-black">Create</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
