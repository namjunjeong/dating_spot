import {useLocation} from "react-router-dom";
import axios from 'axios'
import LoadingWithMask from "./Category/Loading";


const [arr,setArr] = useState({});
const [count,setCount] = useState(0);

const data = async() => {
  const {Loc}=useLocation();
  setArr({"x_coor": Loc.x, "y_coor" : Loc.y});
  await axios.post("http://127.0.0.1:3000/data",{
      x:Loc.x,
      y:Loc.y,
      category:Loc.category
  })
  .then(function(response) {
    setArr({...arr,response});
    setCount(count+1);
    if (count <7){LoadingWithMask();}
  })
  .catch((error)=>{
    console.log(error);
  });
  return arr;
}

export default data;

 

