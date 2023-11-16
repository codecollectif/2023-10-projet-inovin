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
    next: "score",
  },
  ["score"]: {
    previous: "gustatif",
    next: "summary",
  },
  ["summary"]: {
    previous: "score",
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
      score: sessionStorage.getItem("score"),
    });
    setDataWine(dataWine);
  };

  const dataCheckedVisual = [
    sessionStorage.getItem("colorShade"),
    sessionStorage.getItem("shine"),
    sessionStorage.getItem("colorIntensity"),
    sessionStorage.getItem("fluidityOfTears"),
  ].filter((o) => o !== null).length;

  const dataCheckedOlfactif = [
    sessionStorage.getItem("intensityOfAromas"),
    sessionStorage.getItem("feeling"),
    sessionStorage.getItem("aromaticFamilies"),
  ].filter((o) => o !== null).length;

  const dataCheckedGustatif = [
    sessionStorage.getItem("flavors"),
    sessionStorage.getItem("framework"),
    sessionStorage.getItem("aromaticPersistence"),
  ].filter((o) => o !== null).length;
  
  const dataCheckedScore = [sessionStorage.getItem("score")].filter(
    (o) => o !== null
  ).length;

  console.log(
    "test",
    dataCheckedVisual,
    dataCheckedOlfactif,
    dataCheckedGustatif,
    dataCheckedScore
  );

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
          {lastUrlSegment === "score" && (
            <Link
              className={dataCheckedScore === 1 ? "link" : "app-disable"}
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
