import { createContext, useContext, useMemo, useState } from "react";

const WineContext = createContext();

export function WineContextProvider({ children }) {
  const [dataLikes, setDataLikes] = useState([]);

  const [startWines, setStartWines] = useState([]);

  const [levelAllWines, setLevelAllWines] = useState(125);

  const [dataWine, setDataWine] = useState([]);

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
      levelAllWines,
      setLevelAllWines,
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
    levelAllWines,
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
