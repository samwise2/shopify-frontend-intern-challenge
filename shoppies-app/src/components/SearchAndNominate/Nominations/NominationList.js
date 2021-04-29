import React, { useState } from 'react';
import { ListGroup, Button, Image, Modal, Popover, Overlay, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import './NominationList.css';

export function NominationList(props) {
    const [showPopup, setShowPopup] = useState(false);
    const [popupContent, setPopupContent] = useState({});

    function removeNominee(movie) {
        let arr = [...props.nominations];
        let newArr = [];
        for(let i=0; i<arr.length; i++) {
            if(arr[i].imdbID !== movie.imdbID) {
                newArr.push(arr[i]);
            }
        }
        props.setNominations(newArr);
        localStorage.setItem('nominations',JSON.stringify(newArr));
    }

    function getNomineeInfo(id) {
        fetch(`http://www.omdbapi.com/?apikey=c3aee4f7&i=${id}`)
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result.Poster);
                setPopupContent(result);
                setShowPopup(true);
            },
            (error) => {

            }
        )
    }

    let nominees = [];
    props.nominations.forEach(movie => {
        nominees.push(
            <ListGroup.Item>
                <div className="movie-item-wrapper">
                    <div className="add-movie-wrapper">
                        <Button variant="remove" onClick={() => removeNominee(movie)}>
                            <FontAwesomeIcon icon={faTimes} />
                        </Button>
                    </div>
                    <div className="nomination-content-wrapper" onClick={() => getNomineeInfo(movie.imdbID)}>
                        {   movie.Poster !== "N/A" &&
                            <div className="add-movie-wrapper">
                                <Image src={movie.Poster} thumbnail className="movie-poster" />
                            </div>
                        }
                        <div className="title-wrapper">
                            {movie.Title}
                        </div>
                    </div>
                    <div className="date-wrapper">
                            {movie.Year}
                    </div>
                </div>
            </ListGroup.Item>
        );
    });

    if (nominees.length === 0) {
        return (
            <p>You don't have any nominations yet. Try starting with your favourite! 🎬</p>
        );
    }
    return (
        <div className="search-results-wrapper">
                <ListGroup>
                    {nominees}
                </ListGroup>
                <Modal
                    {...props}
                    show={showPopup}
                    onHide={() => setShowPopup(false)}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            {popupContent.Title + ' (' + popupContent.Year +')'}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="popup-boddy-wrapper">
                            <div className="text-based-content">
                                {   popupContent.Plot !== "N/A" &&
                                    <div>
                                        <h6>Summary</h6>
                                        <p>
                                            {popupContent.Plot}
                                        </p>
                                    </div>
                                }
                                {   popupContent.Director !== "N/A" &&
                                        <h6>Director: {popupContent.Director}</h6>
                                }
                                {   popupContent.Genre !== "N/A" &&
                                        <h6>Genre: {popupContent.Genre}</h6>
                                }
                            </div>
                            <div className="image-based-content">
                                {
                                    popupContent.Poster !== "N/A" && 
                                    <Image src={popupContent.Poster} thumbnail className="movie-poster" />
                                }
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="dismiss" onClick={() => setShowPopup(false)}>Close</Button>
                    </Modal.Footer>
                </Modal>
        </div>
    );
}

export default NominationList;