import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";

const SliderWorkshop = (props) => {
  console.log("props",props);
  console.log("score",props.wine.score);
  const wineLevel = [
    {
      title: `${props.wine.wineName}`,
      max:250,
      level: [
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
    }
  ];

  return (
    <>
      <h2>Cépage {props.wine.wineName}</h2>
      {wineLevel.map((level) => (
        <Stack key={level.title} sx={{ height: 200 }} spacing={100} direction="row">
          <Slider
            orientation="vertical"
            aria-label={level.title}
            defaultValue={1}
            sx={{color: "#ac1e44" }}
            valueLabelDisplay="auto"
            step={5}
            marks={level.level}
            min={0}
            max={level.max}
          />
        </Stack>
      ))}
    </>
  );
};

export default SliderWorkshop;
