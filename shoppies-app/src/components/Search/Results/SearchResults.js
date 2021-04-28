import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './SearchResults.css';

export function SearchResults(props) {
    function saveToNominations(index) {
        let arr = props.nominations.length === 0 ? [] : props.nominations;
        arr.push(props.results[index]);
        console.log('AAAAAAAAAAAAA');
        console.log(arr);
        props.setNominations(arr);
    }

    let results = [];
    props.results.forEach((movie,index) => {
        results.push(
            <ListGroup.Item>
                <div className="movie-item-wrapper">
                    <div className="add-movie-wrapper">
                        <Button>
                            <FontAwesomeIcon icon={faPlus} onClick={() => {console.log('ok'); saveToNominations(index);}}/>
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