import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { CgProfile } from "react-icons/cg";

import Logo from "../assets/pictures/Logo.ico";

import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="box-navbar">
      <Link className="nav-link-home" to={"/"}>
        <img className="nav-image-logo" src={Logo} alt="Inovin" />
      </Link>
      <div className="nav-link">
        <Link to={"/profile"}>
          <IconContext.Provider value={{ className: "nav-image-profile" }}>
            <CgProfile />
          </IconContext.Provider>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
