import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './SearchResults.css';

export function SearchResults(props) {
    function saveToNominations(index) {
        let arr = [...props.nominations];
        arr.push(props.results[index]);
        props.setNominations(arr);
        localStorage.setItem('nominations',JSON.stringify(arr));
    }

    let results = [];
    if (props.results === undefined) {
        return (
            <p>Sorry we couldn't find a movie with that title. Try another! 🔎</p>
        );
    }
    if (props.results.length === 0) {
        return (
            <p>Your search results will appear here. Search any movie title above! 🔎</p>
        );
    }
    props.results.forEach((movie,index) => {
        let disable = props.nominations.length >= 5;
        for (let i=0; i<props.nominations.length; i++) {
            if(props.nominations[i].imdbID === movie.imdbID) {
                disable = true
            }
        }
        results.push(
            <ListGroup.Item>
                <div className="movie-item-wrapper">
                    <div className="add-movie-wrapper">
                        <Button variant="add" disabled={disable} onClick={() => saveToNominations(index)}>
                            <FontAwesomeIcon icon={faPlus}/>
                        </Button>
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
    return (
        <div className="search-results-wrapper">
                <ListGroup>
                    {results}
                </ListGroup>
        </div>
    );
}

export default SearchResults;