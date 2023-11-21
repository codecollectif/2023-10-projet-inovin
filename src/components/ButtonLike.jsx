import { useState } from "react";
import { useRevalidator } from "react-router-dom";

const ButtonLike = (props) => {
  const revalidator = useRevalidator();
  const [like,setLike]=useState(false)
  
  const handleClick=()=>{
    setLike(!like)
    sessionStorage.setItem(`${props.name}Like`, !like);
    revalidator.revalidate(); // "recharge" la page
  }

  return (
    <button
      type="button"
          onClick={handleClick}
          >
          {like ? "❤️" : "🖤"}
    </button>
  );
};

export default ButtonLike;