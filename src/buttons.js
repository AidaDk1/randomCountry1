import React from 'react';
import "./button.css";


const Button=()=>{
    return (
        <div >
        <button className='button'>Region:	         East Asia</button>
        <button className='button'>Capital:	        Tokyo</button>
        <button className='button'><span>Population:</span>126,476,461 (11th Rank)</button>
        <button className='button'>Size:	377,930 km² (62th Largest)</button>
        <button className='button'>Language:	Japanese</button>
        <button className='button'>Density:	340.8 per Km2</button>
        <button className='button'>Currency:	Japanese yen</button>
        <button className='button'>National flower:	Cherry Blossoms</button>
        <button className='button'>National dish:	Curry-rice</button>
        </div>
    )
}

export default Button;