import React from 'react';
import { ListGroup, Button, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import './NominationList.css';

export function NominationList(props) {
    let results = [];
    props.results.forEach(movie => {
        results.push(
            <ListGroup.Item>
                <div className="movie-item-wrapper">
                    <div className="add-movie-wrapper">
                        <Button variant="danger" onClick={() => console.log(props.results)}>
                            <FontAwesomeIcon icon={faTimes} />
                        </Button>
                    </div>
                    <div className="add-movie-wrapper">
                        <Image src={movie.Poster} thumbnail className="movie-poster" />
                    </div>
                    <div className="title-wrapper">
                        {movie.Title} + 1
                    </div>
                    <div className="date-wrapper">
                        {movie.Year}
                    </div>
                </div>
            </ListGroup.Item>
        );
    });

    if (results.length === 0) {
        return (
            <h1>No Results</h1>
        );
    }
    return (
        <div className="search-results-wrapper">
                <ListGroup>
                    {results}
                </ListGroup>
        </div>
    );
}

export default NominationList;