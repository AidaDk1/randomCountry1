import React from 'react';
import "./button.css";


const Button=()=>{
    return (
        <div class='btn'>
        <button className='button'><span>Region:</span>East Asia</button>
        <button className='button'><span>Capital:</span>Tokyo</button>
        <button className='button'><span>Population:</span>126,476,461 (11th Rank)</button>
        <button className='button'><span>Size:</span>	377,930 km² (62th Largest)</button>
        <button className='button'><span>Language:</span>	Japanese</button>
        <button className='button'><span>Density:</span>340.8 per Km2</button>
        <button className='button'><span>Currency:</span>Japanese yen</button>
        <button className='button'><span>National flower:</span>National flower:	Cherry Blossoms</button>
        <button className='button'><span>National dish:</span>Curry-rice</button>
        <button class='next'>Next Random Country</button>
        </div>

        
    )

}

export default Button;