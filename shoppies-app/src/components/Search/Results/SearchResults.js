import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import './SearchResults.css';

export function SearchResults(props) {
    let results = [];
    props.results.forEach(movie => {
        console.log(movie);
        results.push(
            <ListGroup.Item>
                <div className="movie-item-wrapper">
                    <Button>Test</Button>
                    {movie.Title}
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