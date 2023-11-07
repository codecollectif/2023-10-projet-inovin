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
  const {dataWine, setDataWine} = useWine()

  const testButton = () =>{
    dataWine.push({
      wineName:id,
      colorShade:sessionStorage.getItem("colorShade"),
      shine:sessionStorage.getItem("shine"),
      colorIntensity:sessionStorage.getItem("colorIntensity"),
      fluidityOfTears:sessionStorage.getItem("fluidityOfTears"),
      intensityOfAromas:sessionStorage.getItem("intensityOfAromas"),
      feeling:sessionStorage.getItem("feeling"),
      aromaticFamilies:sessionStorage.getItem("aromaticFamilies"),
      flavors:sessionStorage.getItem("flavors"),
      framework:sessionStorage.getItem("framework"),
      aromaticPersistence:sessionStorage.getItem("aromaticPersistence"),
      score:sessionStorage.getItem("score")
    })
    setDataWine(dataWine)
  }

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
          {links.next ? (
            <Link className="link" to={`/${id}/${links.next}`}>
              Suivant
            </Link>
          ) : (
            <Link onClick={testButton} className="link" to={"/start"}>
              Valider
            </Link>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
