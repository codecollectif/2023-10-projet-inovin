import { Link } from "react-router-dom";
import Logo from "../assets/pictures/Logo.ico";
import LogoProfil from "../assets/pictures/profil.png";
import LogoHome from "../assets/pictures/deco.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="box-navbar">
      <Link className="nav-link-home" to={"/"}>
        <img className="nav-image-logo" src={Logo} alt="Inovin" />
      </Link>
      <div className="nav-link">
        <Link className="nav-link-profil" to={"/profile"}>
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
