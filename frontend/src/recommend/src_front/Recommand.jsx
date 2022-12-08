import { useLocation } from "react-router-dom";
import React from "react";
import axios from "axios";
import LoadingWithMask from "./Category/Loading";

let arr = {}; //여기 담아서 넘겨줄것임

class Process extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      dat: {},
    };
  }
}

const Recommend = () => {
  const { Loc } = useLocation();
  const data = async () => {
    for (let i = 0; i < Loc.category.length; i++) {
      await axios
        .post("http://127.0.0.1:3000/data", {
          x: Loc.x,
          y: Loc.y,
          category: Loc.category,
        })
        .then((response) => {
          this.setState({
            dat: response,
            count: this.state.count + 1,
          });
        })
        .catch((error) => {
          console.log(error);
        });
      if (this.state.count < 7) {
        LoadingWithMask();
      }
    }
    arr = this.state.dat;
  };

  data();
};

export default Recommend;
