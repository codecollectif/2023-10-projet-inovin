import { createContext, useContext, useMemo, useState } from "react";
const devDataWine = [
  {
    wineName: "Pinot blanc",
    countLike: 5,
    aromaticFamilies: "Fruits",
    aromaticPersistence: "Moyenne",
    colorIntensity: "Claire",
    colorShade: "Framboise",
    feeling: "Franc",
    flavors: "Gras",
    fluidityOfTears: "Fines et fluides",
    framework: "Fluide",
    intensityOfAromas: "Faible, vin fermé",
    shine: "étincelante",
  },
  {
    wineName: "Petit Manseng",
    countLike: 6,
    aromaticFamilies: "Fruits",
    aromaticPersistence: "Moyenne",
    colorIntensity: "Claire",
    colorShade: "Framboise",
    feeling: "Franc",
    flavors: "Gras",
    fluidityOfTears: "Fines et fluides",
    framework: "Fluide",
    intensityOfAromas: "Faible, vin fermé",
    shine: "étincelante",
  },
  {
    wineName: "Chasselas",
    countLike: 4,
    aromaticFamilies: "Fruits",
    aromaticPersistence: "Moyenne",
    colorIntensity: "Claire",
    colorShade: "Framboise",
    feeling: "Franc",
    flavors: "Gras",
    fluidityOfTears: "Fines et fluides",
    framework: "Fluide",
    intensityOfAromas: "Faible, vin fermé",
    shine: "étincelante",
  },
  {
    wineName: "Sylvaner",
    countLike: 3,
    aromaticFamilies: "Fruits",
    aromaticPersistence: "Moyenne",
    colorIntensity: "Claire",
    colorShade: "Framboise",
    feeling: "Franc",
    flavors: "Gras",
    fluidityOfTears: "Fines et fluides",
    framework: "Fluide",
    intensityOfAromas: "Faible, vin fermé",
    shine: "étincelante",
  },
];

const devDataLikes = [
  {
    aromaticFamiliesLike: null,
    aromaticPersistenceLike: null,
    colorIntensityLike: "true",
    colorShadeLike: "true",
    feelingLike: "false",
    flavorsLike: null,
    fluidityOfTearsLike: "true",
    frameworkLike: null,
    intensityOfAromasLike: "true",
    shineLike: "true",
    countLike: 5,
    wineName: "Pinot blanc",
  },
  {
    aromaticFamiliesLike: "true",
    aromaticPersistenceLike: null,
    colorIntensityLike: "true",
    colorShadeLike: "true",
    feelingLike: "true",
    flavorsLike: "true",
    fluidityOfTearsLike: null,
    frameworkLike: "false",
    intensityOfAromasLike: null,
    shineLike: "true",
    countLike: 6,
    wineName: "Petit Manseng",
  },
  {
    aromaticFamiliesLike: null,
    aromaticPersistenceLike: null,
    colorIntensityLike: "true",
    colorShadeLike: "true",
    feelingLike: null,
    flavorsLike: null,
    fluidityOfTearsLike: "true",
    frameworkLike: "false",
    intensityOfAromasLike: "true",
    shineLike: null,
    countLike: 4,
    wineName: "Chasselas",
  },
  {
    aromaticFamiliesLike: null,
    aromaticPersistenceLike: null,
    colorIntensityLike: null,
    colorShadeLike: null,
    feelingLike: null,
    flavorsLike: null,
    fluidityOfTearsLike: "true",
    frameworkLike: "false",
    intensityOfAromasLike: "true",
    shineLike: "true",
    countLike: 3,
    wineName: "Sylvaner",
  },
];

const devStartWines = ["Sylvaner", "Chasselas", "Petit Manseng", "Pinot blanc"];

const WineContext = createContext();

export function WineContextProvider({ children }) {
  const [dataLikes, setDataLikes] = useState(devDataLikes);

  const [startWines, setStartWines] = useState(devStartWines);

  const [levelWines, setLevelWines] = useState(125);

  const [dataWine, setDataWine] = useState(devDataWine);

  const [countLike, setCountLike] = useState(0);

  const [name, setName] = useState(sessionStorage.getItem("name"));

  const [colorShade, setColorShade] = useState(
    sessionStorage.getItem("colorShade")
  );
  const [shine, setShine] = useState(sessionStorage.getItem("shine"));

  const [colorIntensity, setColorIntensity] = useState(
    sessionStorage.getItem("colorIntensity")
  );
  const [fluidityOfTears, setFluidityOfTears] = useState(
    sessionStorage.getItem("fluidityOfTears")
  );
  const [intensityOfAromas, setIntensityOfAromas] = useState(
    sessionStorage.getItem("intensityOfAromas")
  );
  const [feeling, setFeeling] = useState(sessionStorage.getItem("feeling"));

  const [aromaticFamilies, setAromaticFamilies] = useState(
    sessionStorage.getItem("aromaticFamilies")
  );
  const [flavors, setFlavors] = useState(sessionStorage.getItem("flavors"));

  const [framework, setFramework] = useState(
    sessionStorage.getItem("framework")
  );
  const [aromaticPersistence, setAromaticPersistence] = useState(
    sessionStorage.getItem("AromaticPersistence")
  );

  const wineManage = useMemo(() => {
    return {
      dataLikes,
      setDataLikes,
      startWines,
      setStartWines,
      levelWines,
      setLevelWines,
      dataWine,
      setDataWine,
      countLike,
      setCountLike,
      name,
      setName,
      colorShade,
      setColorShade,
      shine,
      setShine,
      colorIntensity,
      setColorIntensity,
      fluidityOfTears,
      setFluidityOfTears,
      intensityOfAromas,
      setIntensityOfAromas,
      feeling,
      setFeeling,
      aromaticFamilies,
      setAromaticFamilies,
      flavors,
      setFlavors,
      framework,
      setFramework,
      aromaticPersistence,
      setAromaticPersistence,
    };
  }, [
    dataLikes,
    startWines,
    levelWines,
    dataWine,
    countLike,
    name,
    colorShade,
    shine,
    colorIntensity,
    fluidityOfTears,
    intensityOfAromas,
    feeling,
    aromaticFamilies,
    flavors,
    framework,
    aromaticPersistence,
  ]);

  return (
    <WineContext.Provider value={wineManage}>{children}</WineContext.Provider>
  );
}
export const useWine = () => useContext(WineContext);
