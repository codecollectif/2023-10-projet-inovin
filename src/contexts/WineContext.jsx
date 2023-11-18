import { createContext, useContext, useMemo, useState } from "react";
/* const DevDataWine = [
  {
    wineName: "Pinot noir",
    colorShade: "Rubis",
    shine: "éclatante",
    colorIntensity: "Opaque",
    fluidityOfTears: "Larges et visqueses",
    intensityOfAromas: "Faible, vin fermé",
    feeling: "Douteux",
    aromaticFamilies: "Fleurs",
    flavors: "Sucre",
    framework: "Léger",
    aromaticPersistence: "Persistante",
    score: "3",
  },
  {
    wineName: "Ciera",
    colorShade: "Rubis",
    shine: "éclatante",
    colorIntensity: "Trouble",
    fluidityOfTears: "Larges et visqueses",
    intensityOfAromas: "Forte, vin ouvert",
    feeling: "Douteux",
    aromaticFamilies: "Epices",
    flavors: "Sucre",
    framework: "Charpenté",
    aromaticPersistence: "Persistante",
    score: "10",
  },
  {
    wineName: "Grenache",
    colorShade: "Cerise",
    shine: "éclatante",
    colorIntensity: "Moyenne",
    fluidityOfTears: "Larges et visqueses",
    intensityOfAromas: "Moyenne",
    feeling: "Simple",
    aromaticFamilies: "Fleurs",
    flavors: "Amer",
    framework: "Fluide",
    aromaticPersistence: "Moyenne",
    score: "6",
  },
  {
    wineName: "Chasselat",
    colorShade: "Tuile",
    shine: "étincelante",
    colorIntensity: "Claire",
    fluidityOfTears: "Fines et fluides",
    intensityOfAromas: "Faible, vin fermé",
    feeling: "Franc",
    aromaticFamilies: "Fruits",
    flavors: "Acidité",
    framework: "Léger",
    aromaticPersistence: "Courte",
    score: "8",
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
