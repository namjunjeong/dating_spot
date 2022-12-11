import React from 'react';
import './style.css';

function Display( { name, address, photo} ) {
    return ( 
    <div style={{marginLeft:"2rem"}}>
        <div className="flex-container" key={name}>
        <img src={photo} alt={name} style = 
        {{
          width: '250px',
          height: '250px',
        }}
        /></div>
        <div>
            <div>이름 : {name}</div>
            <div>주소 : {address}</div>
        </div>
    </div>
    );
  }

export default Display;