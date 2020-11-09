import React, { useState, useEffect } from 'react';
import { Modal, Image,Header,Button,Icon } from 'semantic-ui-react';

import {requests,movies} from "../request";
import ModalRating from './ModalRating';
import './Row.css';


function Row({ title , fetchURL,Largeone }) {
    const [modal, setModal] = useState(false);
    const [movie, setMovie] = useState({});
    const [sorted, setSorted] = useState({});
    // const openModal = () => setModal(true);

    // const closeModal = () => setModal(false);

    // const getValue = (value) => {
    //     setMovie(value);
    //     setModal(true);
    // }

    return (
        <React.Fragment>
            <div className="row">
                <h2 className="row__title">{title}</h2>
                <div className="row__posters">
               
               {console.log(fetchURL)}
                    {/* { 
                    fetchURL.map((value, key) => (
                    
                        value.addedTime.sort(function (a, b) { return a - b })
                
                    ))    
                        
                    } */}
                    {console.log(fetchURL)}
                    {
                        fetchURL.map((value, key) => (
                    
                            <img key={key} src={value.image} className={`row__poster ${Largeone && "row__large"}`} alt="" />
                    
                        ))
                    
                }
                </div>
            </div>
            {/* <Modal basic open={modal} onClose={closeModal}>
                <Modal.Header>{movie.title}</Modal.Header>
                <Modal.Content>
            
                </Modal.Content>
                <Modal.Actions>
                    <Button color="green" inverted >
                    <Icon name="checkmark" /> Add
                    </Button>
                    <Button color="red" inverted onClick={closeModal}>
                    <Icon name="remove" /> Cancel
                    </Button>
                </Modal.Actions>
            </Modal> */}
        </React.Fragment>    
    )
}

export default Row



// onClick={getValue(value)}
// onClick={<ModalRating movie={ value}/>}