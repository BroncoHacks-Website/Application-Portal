import "../styles/Navbar.css";

import { Link } from "react-router-dom";
import BroncoHacksLogo from "../assets/BroncoHacks_Logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="navbar-header" to="/">
        <img src={BroncoHacksLogo} alt="" />
        <h1>BRONCO HACKS</h1>
      </Link>

      <ul className="navbar-links">
        <li>
          <Link className="link" to="/">
            <h1>Home</h1>
          </Link>
        </li>
        <li>
          <Link to="/team">
            <h1>Team</h1>
          </Link>
        </li>
        <li>
          <Link to="/faq">
            <h1>FAQ</h1>
          </Link>
        </li>
        <Link className="apply-button" to="/signup">
          <button>
            <h1>APPLY</h1>
          </button>
        </Link>
      </ul>
    </div>
  );
};
export default Navbar;
