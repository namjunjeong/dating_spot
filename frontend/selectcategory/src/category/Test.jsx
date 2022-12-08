import React from "react";
import { useEffect } from "react";
import {useLocation, useSearchParams} from 'react-router-dom';


const Test=()=>{
    const location=useLocation();
    useEffect(()=>{
        console.log(location);

    },[])
}

export default Test;