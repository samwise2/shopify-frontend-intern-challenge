import React from 'react';
import { InputGroup, Button, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export function SearchInput(props) {
    function getMovies(searchText) {
        fetch("https://api.example.com/items")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result.items
                });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
            this.setState({
                isLoaded: true,
                error
            });
            }
        )
    }

    return (
        <div className="search-input-wrapper">
            <InputGroup className="mb-3" size="lg">
                <FormControl
                 placeholder="Movie Title"
                 aria-label="Recipient's username"
                 aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                    <Button variant="outline-secondary"><FontAwesomeIcon icon={faSearch} /> Search </Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
    );
}

export default SearchInput;