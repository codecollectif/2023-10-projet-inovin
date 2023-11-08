import { useEffect, useState } from "react";
import { useWine } from "../contexts/WineContext";

import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";

const SliderWorkshop = (props) => {
  const slideWineLevel = [
    {
      title: `${props.wine.wineName}`,
      levelMax: [
        {
          value: 0,
          label: "vide",
        },
        {
          value: 50,
          label: "50 ml",
        },
        {
          value: 100,
          label: "100 ml",
        },
        {
          value: 150,
          label: "150 ml",
        },
        {
          value: 200,
          label: "200 ml",
        },
        {
          value: 250,
          label: "250 ml",
        },
      ],
      level: [
        {
          value: 0,
          label: "vide",
        },
        {
          value: 10,
          label: "10 ml",
        },
        {
          value: 20,
          label: "20 ml",
        },
        {
          value: 30,
          label: "30 ml",
        },
        {
          value: 40,
          label: "40 ml",
        },
        {
          value: 50,
          label: "50 ml",
        },
      ],
    },
  ];
  const [value, setValue] = useState(0);
  const { dataWine, setLevelWines } = useWine();

  const handleChange = (e) => {
    setValue(e.target.value);
    sessionStorage.setItem(`${props.wine.wineName}`, e.target.value);
  };

  useEffect(() => {
    const wines = dataWine
      .map((wine) => parseInt(sessionStorage.getItem(wine.wineName)))
      .reduce((acc, curent) => curent + acc);
    setLevelWines(parseInt(wines));
  }, [value]);

  return (
    <>
      <h2>Cépage {props.wine.wineName}</h2>
      {slideWineLevel.map((level) => (
        <Stack
          className="center"
          key={level.title}
          sx={{ height: 150 }}
          spacing={10}
        >
          <Slider
            orientation="vertical"
            aria-label={level.title}
            defaultValue={props.maxScore === props.wine.wineName ? 125 : 1}
            sx={{ color: "#ac1e44" }}
            onChange={(e) => handleChange(e)}
            valueLabelDisplay="auto"
            aria-valuetext={`${value}`}
            step={5}
            marks={
              props.maxScore === props.wine.wineName
                ? level.levelMax
                : level.level
            }
            min={0}
            max={props.maxScore === props.wine.wineName ? 250 : 50}
          />
        </Stack>
      ))}
    </>
  );
};

export default SliderWorkshop;
