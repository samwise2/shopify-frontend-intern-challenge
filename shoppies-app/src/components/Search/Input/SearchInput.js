import React from 'react';
import { InputGroup, Button, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './SearchInput.css';

export function SearchInput(props) {
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