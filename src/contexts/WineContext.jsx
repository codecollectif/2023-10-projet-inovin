import { createContext, useContext, useMemo, useState } from "react";
/* const DevDataWine = [
  {
    aromaticFamilies: "Fruits",
    aromaticFamiliesLike: false,
    aromaticPersistence: "Moyenne",
    aromaticPersistenceLike: false,
    colorIntensity: "Claire",
    colorIntensityLike: true,
    colorShade: "Framboise",
    colorShadeLike: true,
    feeling: "Franc",
    feelingLike: false,
    flavors: "Gras",
    flavorsLike: false,
    fluidityOfTears: "Fines et fluides",
    fluidityOfTearsLike: true,
    framework: "Fluide",
    frameworkLike: false,
    intensityOfAromas: "Faible, vin fermé",
    intensityOfAromasLike: true,
    shine: "étincelante",
    shineLike: true,
    wineName: "Chasselat",
  },
  {
    aromaticFamilies: "Fruits",
    aromaticFamiliesLike: false,
    aromaticPersistence: "Moyenne",
    aromaticPersistenceLike: false,
    colorIntensity: "Claire",
    colorIntensityLike: true,
    colorShade: "Framboise",
    colorShadeLike: true,
    feeling: "Franc",
    feelingLike: true,
    flavors: "Gras",
    flavorsLike: false,
    fluidityOfTears: "Fines et fluides",
    fluidityOfTearsLike: true,
    framework: "Fluide",
    frameworkLike: true,
    intensityOfAromas: "Faible, vin fermé",
    intensityOfAromasLike: false,
    shine: "étincelante",
    shineLike: false,
    wineName: "Ciera",
  },
  {
    aromaticFamilies: "Fruits",
    aromaticFamiliesLike: true,
    aromaticPersistence: "Moyenne",
    aromaticPersistenceLike: true,
    colorIntensity: "Claire",
    colorIntensityLike: true,
    colorShade: "Framboise",
    colorShadeLike: false,
    feeling: "Franc",
    feelingLike: true,
    flavors: "Gras",
    flavorsLike: true,
    fluidityOfTears: "Fines et fluides",
    fluidityOfTearsLike: false,
    framework: "Fluide",
    frameworkLike: false,
    intensityOfAromas: "Faible, vin fermé",
    intensityOfAromasLike: false,
    shine: "étincelante",
    shineLike: false,
    wineName: "Grenache",
  },
  {
    aromaticFamilies: "Fruits",
    aromaticFamiliesLike: true,
    aromaticPersistence: "Moyenne",
    aromaticPersistenceLike: true,
    colorIntensity: "Claire",
    colorIntensityLike: false,
    colorShade: "Framboise",
    colorShadeLike: false,
    feeling: "Franc",
    feelingLike: false,
    flavors: "Gras",
    flavorsLike: true,
    fluidityOfTears: "Fines et fluides",
    fluidityOfTearsLike: false,
    framework: "Fluide",
    frameworkLike: false,
    intensityOfAromas: "Faible, vin fermé",
    intensityOfAromasLike: false,
    shine: "étincelante",
    shineLike: false,
    wineName: "Pinot noir",
  },
]; */

const WineContext = createContext();

export function WineContextProvider({ children }) {
  const [levelWines, setLevelWines] = useState(0);

  const [dataWine, setDataWine] = useState([]);

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
