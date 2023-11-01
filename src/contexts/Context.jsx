import { createContext, useContext, useMemo, useState } from "react";

const WineContext = createContext();

export function WineContextProvider({ children }) {
  const [name, setName] = useState(
    sessionStorage.getItem("name")
  );
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
  const [AromaticPersistence, setAromaticPersistence] = useState(
    sessionStorage.getItem("AromaticPersistence")
  );
  const [score, setScore] = useState(sessionStorage.getItem("score"));

  const wineManage = useMemo(() => {
    return {
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
      AromaticPersistence,
      setAromaticPersistence,
      score,
      setScore,
    };
  }, [colorShade, shine]);

  return (
    <WineContext.Provider value={wineManage}>{children}</WineContext.Provider>
  );
}
export const useWine = () => useContext(WineContext);
