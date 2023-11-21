import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { useWine } from "./contexts/WineContext";

import Navbar from "./components/Navbar";

import "./app.css";

const allLinks = {
  ["visuel"]: {
    next: "olfactif",
  },
  ["olfactif"]: {
    previous: "visuel",
    next: "gustatif",
  },
  ["gustatif"]: {
    previous: "olfactif",
    next: "summary",
  },
  ["summary"]: {
    previous: "gustatif",
  },
};

function App() {
  const { id } = useParams();
  const { pathname } = useLocation();

  const [lastUrlSegment] = pathname.match(/([^/]+)\/?$/);
  const links = allLinks[lastUrlSegment];
  const { dataWine, setDataWine } = useWine();

  const ButtonValid = () => {
    dataWine.push({
      wineName: id,
      colorShade: sessionStorage.getItem("colorShade"),
      shine: sessionStorage.getItem("shine"),
      colorIntensity: sessionStorage.getItem("colorIntensity"),
      fluidityOfTears: sessionStorage.getItem("fluidityOfTears"),
      intensityOfAromas: sessionStorage.getItem("intensityOfAromas"),
      feeling: sessionStorage.getItem("feeling"),
      aromaticFamilies: sessionStorage.getItem("aromaticFamilies"),
      flavors: sessionStorage.getItem("flavors"),
      framework: sessionStorage.getItem("framework"),
      aromaticPersistence: sessionStorage.getItem("aromaticPersistence"),
    });
    setDataWine(dataWine);
  };

  const dataCheckedVisual = [
    sessionStorage.getItem(`${id}.colorShade`),
    sessionStorage.getItem(`${id}.shine`),
    sessionStorage.getItem(`${id}.colorIntensity`),
    sessionStorage.getItem(`${id}.fluidityOfTears`),
  ].filter((o) => o !== null).length;

  const dataCheckedOlfactif = [
    sessionStorage.getItem(`${id}.intensityOfAromas`),
    sessionStorage.getItem(`${id}.feeling`),
    sessionStorage.getItem(`${id}.aromaticFamilies`),
  ].filter((o) => o !== null).length;

  const dataCheckedGustatif = [
    sessionStorage.getItem(`${id}.flavors`),
    sessionStorage.getItem(`${id}.framework`),
    sessionStorage.getItem(`${id}.aromaticPersistence`),
  ].filter((o) => o !== null).length;

  return (
    <>
      <Navbar />
      <main className="tasting-box">
        <Outlet />
        <div className="tasting-div-link">
          {links.previous && (
            <Link className="link" to={`/${id}/${links.previous}`}>
              Précédent
            </Link>
          )}
          {lastUrlSegment === "visuel" && (
            <Link
              className={dataCheckedVisual === 4 ? "link" : "app-disable"}
              to={`/${id}/${links.next}`}
            >
              Suivant
            </Link>
          )}
          {lastUrlSegment === "olfactif" && (
            <Link
              className={dataCheckedOlfactif === 3 ? "link" : "app-disable"}
              to={`/${id}/${links.next}`}
            >
              Suivant
            </Link>
          )}
          {lastUrlSegment === "gustatif" && (
            <Link
              className={dataCheckedGustatif === 3 ? "link" : "app-disable"}
              to={`/${id}/${links.next}`}
            >
              Suivant
            </Link>
          )}
          {lastUrlSegment === "summary" && (
            <Link onClick={ButtonValid} className="link" to={"/start"}>
              Valider
            </Link>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
