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
  const { dataWine, countLike, setDataWine, setCountLike } = useWine();

  const ButtonValid = () => {
    dataWine.push({
      wineName: id,
      colorShade: sessionStorage.getItem("colorShade"),
      colorShadeLike: sessionStorage.getItem("colorShadeLike"),
      shine: sessionStorage.getItem("shine"),
      shineLike: sessionStorage.getItem("shineLike"),
      colorIntensity: sessionStorage.getItem("colorIntensity"),
      colorIntensityLike: sessionStorage.getItem("colorIntensityLike"),
      fluidityOfTears: sessionStorage.getItem("fluidityOfTears"),
      fluidityOfTearsLike: sessionStorage.getItem("fluidityOfTearsLike"),
      intensityOfAromas: sessionStorage.getItem("intensityOfAromas"),
      intensityOfAromasLike: sessionStorage.getItem("intensityOfAromasLike"),
      feeling: sessionStorage.getItem("feeling"),
      feelingLike: sessionStorage.getItem("feelingLike"),
      aromaticFamilies: sessionStorage.getItem("aromaticFamilies"),
      aromaticFamiliesLike: sessionStorage.getItem("aromaticFamiliesLike"),
      flavors: sessionStorage.getItem("flavors"),
      flavorsLike: sessionStorage.getItem("flavorsLike"),
      framework: sessionStorage.getItem("framework"),
      frameworkLike: sessionStorage.getItem("frameworkLike"),
      aromaticPersistence: sessionStorage.getItem("aromaticPersistence"),
      aromaticPersistenceLike: sessionStorage.getItem("aromaticPersistenceLike"),
      countLike: countLike,
    });
    setDataWine(dataWine);
    setCountLike(0)
  };

  const dataCheckedVisual = [
    sessionStorage.getItem(`colorShade`),
    sessionStorage.getItem(`shine`),
    sessionStorage.getItem(`colorIntensity`),
    sessionStorage.getItem(`fluidityOfTears`),
  ].filter((o) => o !== null).length;

  const dataCheckedOlfactif = [
    sessionStorage.getItem(`intensityOfAromas`),
    sessionStorage.getItem(`feeling`),
    sessionStorage.getItem(`aromaticFamilies`),
  ].filter((o) => o !== null).length;

  const dataCheckedGustatif = [
    sessionStorage.getItem(`flavors`),
    sessionStorage.getItem(`framework`),
    sessionStorage.getItem(`aromaticPersistence`),
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
