import React, { useState, useEffect } from 'react';
import { InputGroup, Button, FormControl, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import SectionTitle from '../Search/Input/SectionTitle';
import SearchResults from '../Search/Results/SearchResults';
import NominationList from './Nominations/NominationList';
import './SearchInput.css';

export function SearchAndNominate(props) {
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [nominations, setNominations] = useState([]);
    const [show, setShow] = useState(false);

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

    useEffect(() => {
        if(show) {
            setTimeout(() => setShow(false), 2000)
        }
    }, [show]);

    useEffect(() => {
        if(nominations.length === 5) {
            setShow(true);
        }
    }, [nominations]);

    return (
        <div className="outest">
            <div className="search-wrapper">
                <SectionTitle text="Search Movies" />
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
                    setNominations={setNominations}
                    nominations={nominations}
                />
            </div>
            <div className="nominations-wrapper">
                <SectionTitle
                    text="My Nominations"
                />
                    <Alert show={show} variant="success">
                        That's all five nominations!
                    </Alert>
                <NominationList
                    nominations={nominations}
                    setNominations={setNominations}
                />
            </div>
        </div>
    );
}

export default SearchAndNominate;