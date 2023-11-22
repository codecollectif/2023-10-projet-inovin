import { useState } from "react";
import { useRevalidator } from "react-router-dom";
import { useWine } from "../contexts/WineContext";

const ButtonLike = (props) => {
  const revalidator = useRevalidator();

  const [like, setLike] = useState(false);
  const { countLike, setCountLike } = useWine();

  const handleClick = () => {
    setLike(!like);
    setCountLike(like ? countLike - 1 : countLike + 1);
    sessionStorage.setItem(`${props.name}Like`, !like);
    revalidator.revalidate(); // "recharge" la page
  };

  return (
    <button type="button" onClick={handleClick}>
      {like ? "❤️" : "🖤"}
    </button>
  );
};

export default ButtonLike;
