import React from 'react';
import img1 from './images/japan-flag.jpg';
import "./images.css";

function Imagess(){
    return(
        <div>
            <h1>JAPAN</h1>
            <img class='cntryflag' src={img1} alt='image'/>
        </div>
    )
}

export default Imagess;