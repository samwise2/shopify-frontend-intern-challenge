import React, { useState, useEffect } from 'react';
import { InputGroup, Button, FormControl, Alert, Card } from 'react-bootstrap';
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
        if (searchText.length === 0) {
            return;
        }
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
        const savedNominations = localStorage.getItem('nominations');;
        if (savedNominations) {
          setNominations(JSON.parse(savedNominations));
        }
      }, []);

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
                <Card className="search-card">
                    <Card.Body>
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
                                        variant="search"
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
                    </Card.Body>
                </Card>
            </div>
            <div className="nominations-wrapper">
                <Card className="search-card">
                    <Card.Body>
                        <SectionTitle
                            text="My Nominations"
                        />
                        <Alert show={show} variant="nominations">
                            <strong>That's all five nominations!</strong>
                        </Alert>
                        <NominationList
                            nominations={nominations}
                            setNominations={setNominations}
                        />
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default SearchAndNominate;