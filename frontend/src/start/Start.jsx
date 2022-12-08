import React from "react";
import {Link} from 'react-router-dom';
import './Start.css'

const Start=()=>{

    return (
        
    <div className="container">
        <link href="./css/snow.css" rel="stylesheet" type="text/css" media="all" />
        <div className="word">
            <h4>Shall_We_Date?</h4>
        </div>
        <Link to='/selectcategory'>
            <button className="button">시작</button>
        </Link>
    </div>
    )
}

export default Start;