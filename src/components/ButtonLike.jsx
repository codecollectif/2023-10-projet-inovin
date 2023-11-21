import { useParams, useRevalidator } from "react-router-dom";

const ButtonLike = (props) => {
  const { id } = useParams();
  const revalidator = useRevalidator();
  const like =
    (sessionStorage.getItem(`${id}.${props.name}like`) ?? "false") !== "false";
  
  return (
    <button
      type="button"
          onClick={() => {
            sessionStorage.setItem(`${id}.${props.name}like`, !like);
            revalidator.revalidate(); // "recharge" la page
          }}
          >
          {like ? "❤️" : "🖤"}
    </button>
  );
};

export default ButtonLike;