import { createContext, useContext, useMemo, useState } from "react";
const devDataLike = [
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
    shineLike: "true",
    wineName: "Chasselat",
  },
  {
    aromaticFamiliesLike: "true",
    aromaticPersistenceLike: null,
    colorIntensityLike: "true",
    colorShadeLike: "true",
    feelingLike: null,
    flavorsLike: null,
    fluidityOfTearsLike: "true",
    frameworkLike: "false",
    intensityOfAromasLike: "true",
    shineLike: "true",
    wineName: "Ciera",
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
    shineLike: "true",
    wineName: "Grenache",
  },
  {
    aromaticFamiliesLike: "true",
    aromaticPersistenceLike: null,
    colorIntensityLike: "true",
    colorShadeLike: "true",
    feelingLike: null,
    flavorsLike: null,
    fluidityOfTearsLike: "true",
    frameworkLike: "false",
    intensityOfAromasLike: "true",
    shineLike: "true",
    wineName: "Pinot noir",
  },
];
const devDataWine = [
  {
    aromaticFamilies: "Fruits",
    aromaticFamiliesLike: null,
    aromaticPersistence: "Moyenne",
    aromaticPersistenceLike: null,
    colorIntensity: "Claire",
    colorIntensityLike: "true",
    colorShade: "Framboise",
    colorShadeLike: "true",
    feeling: "Franc",
    feelingLike: null,
    flavors: "Gras",
    flavorsLike: null,
    fluidityOfTears: "Fines et fluides",
    fluidityOfTearsLike: "true",
    framework: "Fluide",
    frameworkLike: "false",
    intensityOfAromas: "Faible, vin fermé",
    intensityOfAromasLike: "true",
    shine: "étincelante",
    shineLike: "true",
    wineName: "Chasselat",
  },
  {
    aromaticFamilies: "Fruits",
    aromaticFamiliesLike: "true",
    aromaticPersistence: "Moyenne",
    aromaticPersistenceLike: null,
    colorIntensity: "Claire",
    colorIntensityLike: "true",
    colorShade: "Framboise",
    colorShadeLike: "true",
    feeling: "Franc",
    feelingLike: "true",
    flavors: "Gras",
    flavorsLike: null,
    fluidityOfTears: "Fines et fluides",
    fluidityOfTearsLike: "true",
    framework: "Fluide",
    frameworkLike: "true",
    intensityOfAromas: "Faible, vin fermé",
    intensityOfAromasLike: null,
    shine: "étincelante",
    shineLike: "false",
    wineName: "Ciera",
  },
  {
    aromaticFamilies: "Fruits",
    aromaticFamiliesLike: "true",
    aromaticPersistence: "Moyenne",
    aromaticPersistenceLike: "true",
    colorIntensity: "Claire",
    colorIntensityLike: "true",
    colorShade: "Framboise",
    colorShadeLike: "false",
    feeling: "Franc",
    feelingLike: "true",
    flavors: "Gras",
    flavorsLike: "true",
    fluidityOfTears: "Fines et fluides",
    fluidityOfTearsLike: null,
    framework: "Fluide",
    frameworkLike: null,
    intensityOfAromas: "Faible, vin fermé",
    intensityOfAromasLike: null,
    shine: "étincelante",
    shineLike: null,
    wineName: "Grenache",
  },
  {
    aromaticFamilies: "Fruits",
    aromaticFamiliesLike: "true",
    aromaticPersistence: "Moyenne",
    aromaticPersistenceLike: "true",
    colorIntensity: "Claire",
    colorIntensityLike: "false",
    colorShade: "Framboise",
    colorShadeLike: null,
    feeling: "Franc",
    feelingLike: null,
    flavors: "Gras",
    flavorsLike: "true",
    fluidityOfTears: "Fines et fluides",
    fluidityOfTearsLike: null,
    framework: "Fluide",
    frameworkLike: null,
    intensityOfAromas: "Faible, vin fermé",
    intensityOfAromasLike: null,
    shine: "étincelante",
    shineLike: null,
    wineName: "Pinot noir",
  },
];

const WineContext = createContext();

export function WineContextProvider({ children }) {
  const [levelWines, setLevelWines] = useState(0);

  const [dataLike,setDataLike] = useState(devDataLike);

  const [dataWine, setDataWine] = useState(devDataWine);

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
      levelWines,
      setLevelWines,
      dataLike,
      setDataLike,
      dataWine,
      setDataWine,
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
    levelWines,
    dataLike,
    dataWine,
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
