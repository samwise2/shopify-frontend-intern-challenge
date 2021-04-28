import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import './SearchResults.css';

export function SearchResults(props) {
    let results = [];
    props.results.forEach(movie => {
        console.log(movie);
        results.push(
            <ListGroup.Item>
                <div className="movie-item-wrapper">
                    <div className="add-movie-wrapper">
                        <FontAwesomeIcon icon={faPlusCircle} onClick={() => console.log("works")} />
                    </div>
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
    console.log(results);

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

export default SearchResults;