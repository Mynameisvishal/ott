import React, { useState, useEffect } from 'react';
import {requests,movies} from "../request";
import ModalRating from './ModalRating';
import './Row.css';


function Row({ title , fetchURL,Largeone }) {
   
    return (
        <div className="row">
            <h2 className="row__title">{title}</h2>
            <div className="row__posters">
               
               
                    {
                        fetchURL.map((value, key) => (
                    
                            <img key={key} src={value.image} className={`row__poster ${Largeone && "row__large"}`} alt="" />
                    
                        ))
                    
                }
            </div>
            

        </div>
    )
}

export default Row



   
// onClick={<ModalRating key={key} images={img} title={ title} trigger={true} movie={ fetchURL}/>}