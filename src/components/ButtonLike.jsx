import { useParams, useRevalidator } from "react-router-dom";

const ButtonLike = (props) => {
  //const { id } = useParams();
  const revalidator = useRevalidator();
  const like =
    (sessionStorage.getItem(`${props.name}Like`) ?? "false") !== "false";
  
  return (
    <button
      type="button"
          onClick={() => {
            sessionStorage.setItem(`${props.name}Like`, !like);
            revalidator.revalidate(); // "recharge" la page
          }}
          >
          {like ? "❤️" : "🖤"}
    </button>
  );
};

export default ButtonLike;