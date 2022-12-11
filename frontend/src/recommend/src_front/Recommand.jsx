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
  
};

export default Recommend;
