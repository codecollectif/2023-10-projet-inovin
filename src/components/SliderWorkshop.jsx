import { useState } from "react";
import { useWine } from "../contexts/WineContext";

import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";

const valueStep = 5;

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

  const { dataWine, levelAllWines, setLevelAllWines } = useWine();

  const [value, setValue] = useState(
    props.maxScore === props.wine.wineName ? 125 : 0
  );

  const handleChange = (e) => {
    sessionStorage.setItem(`${e.target.name}`, e.target.value); // update storage

    // compute total
    const winesLevel = dataWine
      .map((wine) => parseInt(sessionStorage.getItem(wine.wineName)))
      .reduce((acc, current) => current + acc);

    // check total
    if (winesLevel <= 250) {
      setValue(e.target.value); // update state : this will update slider rendering

      setLevelWines(winesLevel);
    } else {
      sessionStorage.setItem(`${e.target.name}`, value); // restore previous value in storage

      // state is kept unchanged
      // slider is rendered with an unchanged value and looks "blocked
    }
  };

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
            name={props.wine.wineName}
            orientation="vertical"
            aria-label={level.title}
            value={levelAllWines >= 251 ? value : value}
            sx={{ color: "#ac1e44" }}
            onChange={(e) => handleChange(e)}
            valueLabelDisplay={"auto"}
            marks={
              props.maxScore === props.wine.wineName
                ? level.levelMax
                : level.level
            }
            step={5}
            min={0}
            max={props.maxScore === props.wine.wineName ? 250 : 100}
          />
        </Stack>
      ))}
    </>
  );
};

export default SliderWorkshop;
