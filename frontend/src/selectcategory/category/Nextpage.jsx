import { useNavigate } from "react-router-dom";
import Map from "./map";
import CategoryPage from "./Category.jsx";

function Next() {
  const navigate = useNavigate();

  const move = () => {
    navigate("/recommend", {
      state: {
        x: Map.state.x,
        y: Map.state.y,
        category: CategoryPage.filter,
      },
    });
  };
  return <div></div>;
}

export default Next;
