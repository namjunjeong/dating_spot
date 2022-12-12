import React from 'react';
import './style.css';
import default_photo from "./img/default_photo.png"
function Display( { name, photo,rating} ) {
  const rate = () => {
    let result = [];
    for (let i =0;i<rating;i++) {
       result.push([<span class="starR on"></span>])
    }
    for (let i =0;i<5-rating;i++){
      result.push([<span class="starR"></span>])
    }
    return result;
  }
    return ( 
    <div style={{marginLeft:"2rem"}}>
        <div className="flex-container" key={name}>
        <img src={photo!="ed" ? photo : default_photo} alt={name} style = 
        {{
          width: '250px',
          height: '250px',
        }}
        />
        </div>
        <div style={{fontsize:"8px"}}><b>Info:</b></div>
        <li >가게명:{" "+name}</li>
        <div class="starRev" >
          {rate()}
        </div>
    </div>
    );
  }

export default Display;

