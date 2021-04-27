import React, { useState } from 'react';
import { InputGroup, Button, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import SearchInputText from '../Search/Input/SearchInputText';
import SearchResults from '../Search/Results/SearchResults';
import './SearchInput.css';

export function SearchAndNominate(props) {
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [nominations, setNominations] = useState([]);

    function getMovies(searchText) {
        fetch(`http://www.omdbapi.com/?apikey=c3aee4f7&s=${searchText}`)
        .then(res => res.json())
        .then(
            (result) => {
                setSearchResults(result.Search);
            },
            (error) => {
                setSearchResults([]);
            }
        )
    }

    return (
        <div className="searchAndNominateWrapper">
            <SearchInputText />
            <div className="search-input-wrapper">
                <InputGroup className="mb-3" size="lg">
                    <FormControl
                        placeholder="Movie Title"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        onChange={(event) => setSearchText(event.target.value)}
                    />
                    <InputGroup.Append>
                        <Button 
                            variant="outline-secondary"
                            onClick={() => getMovies(searchText)}
                        > <FontAwesomeIcon icon={faSearch} /> Search 
                        </Button>
                    </InputGroup.Append>
                </InputGroup>
            </div>
            <SearchResults
                results={searchResults}
                nominate={setNominations}
            />
        </div>
    );
}

export default SearchAndNominate;