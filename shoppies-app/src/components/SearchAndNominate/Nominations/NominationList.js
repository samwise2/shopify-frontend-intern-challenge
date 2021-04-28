import React from 'react';
import { ListGroup, Button, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import './NominationList.css';

export function NominationList(props) {
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

    let nominees = [];
    props.nominations.forEach(movie => {
        nominees.push(
            <ListGroup.Item>
                <div className="movie-item-wrapper">
                    <div className="add-movie-wrapper">
                        <Button variant="secondary" onClick={() => removeNominee(movie)}>
                            <FontAwesomeIcon icon={faTimes} />
                        </Button>
                    </div>
                    {   movie.Poster !== "N/A" &&
                        <div className="add-movie-wrapper">
                            <Image src={movie.Poster} thumbnail className="movie-poster" />
                        </div>
                    }
                    <div className="title-wrapper">
                        {movie.Title}
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
        </div>
    );
}

export default NominationList;