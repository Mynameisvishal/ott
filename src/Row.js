import React, { useState, useEffect } from 'react';
import './Row.css';
import axios from './axios';
import blacklist from "./images/blacklist.jpg"
import ginnywedssunny from './images/ginnywedssunny.jpg'; 
import paranormal from './images/paranormal.jpg';
import spartacus from './images/spartacus.jpg';


function Row({ title , fetchURL,Largeone }) {
   
    return (
        <div className="row">
            <h2 className="row__title">{title}</h2>
            <div className="row__posters">
                {/* several row__posters */}
                {fetchURL.images.map((img,key) => (

                    <img key={key} src={img} className={`row__poster ${Largeone && "row__large"}`} alt=""/>
                ))}
            </div>
            

        </div>
    )
}

export default Row
