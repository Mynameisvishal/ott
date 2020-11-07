import React, { useState, useEffect } from 'react';
import {requests,movies} from "./request";
import ModalRating from './ModalRating';
import './Row.css';


function Row({ title , fetchURL,Largeone }) {
   
    return (
        <div className="row">
            <h2 className="row__title">{title}</h2>
            <div className="row__posters">
                {/* several row__posters */}
                {fetchURL.names.map((name,key) => (
                    movies.map((img, key) => (
                        {
                            name === img ?
                            <img key={key} src={img} className={`row__poster ${Largeone && "row__large"}`} alt="" />
                            :""
                        }
                    ))
                    
                ))}
            </div>
            

        </div>
    )
}

export default Row

// {fetchURL.images.map((img,key) => (
                    
//     <img key={key} src={img} className={`row__poster ${Largeone && "row__large"}`} alt="" />
    
// ))}
// onClick={<ModalRating key={key} images={img} title={ title} trigger={true} movie={ fetchURL}/>}