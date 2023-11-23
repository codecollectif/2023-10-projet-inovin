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
          value: 20,
          label: "20 ml",
        },
        {
          value: 40,
          label: "40 ml",
        },
        {
          value: 60,
          label: "60 ml",
        },
        {
          value: 80,
          label: "80 ml",
        },
        {
          value: 100,
          label: "100 ml",
        },
      ],
    },
  ];

  const { dataWine, setLevelWines } = useWine();
  const [value, setValue] = useState(125);

  const handleChange = (e) => {
    setValue(e.target.value);
    sessionStorage.setItem(`${props.wine.wineName}`, e.target.value);
  };

  useEffect(() => {
    const wines = dataWine
      .map((wine) => parseInt(sessionStorage.getItem(wine.wineName)))
      .reduce((acc, current) => current + acc);
    console.log(wines);
    setLevelWines(parseInt(wines));
  }, [value]);

  return (
    <>
      <h2>{props.wine.wineName}</h2>
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
            defaultValue={props.maxScore === props.wine.wineName ? 125 : 0}
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
            max={props.maxScore === props.wine.wineName ? 250 : 100}
          />
        </Stack>
      ))}
    </>
  );
};

export default SliderWorkshop;
