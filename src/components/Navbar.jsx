import { Link } from "react-router-dom";
import Logo from "../pictures/Logo.ico";
import LogoProfil from "../pictures/profil.png";
import LogoHome from "../pictures/deco.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="box-navbar">
      <Link className="nav-link-home" to={"/"}>
        <img className="nav-image-logo" src={Logo} alt="Inovin" />
      </Link>
      <div className="nav-link">
        <Link className="nav-link-profil" to={"/"}>
          <img className="nav-image-profil" src={LogoProfil} alt="profil" />
        </Link>
        <Link className="nav-link-home" to={"/"}>
          <img className="nav-image-home" src={LogoHome} alt="accueil" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
