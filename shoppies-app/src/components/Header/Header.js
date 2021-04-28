import React from 'react';
import './Header.css';

export function Header() {
    return (
        <div className="header-wrapper">
            <div className="title-wrapper">
                <h1 className="header-text"><strong>The Shoppies</strong> 🎬</h1>
            </div>
            <div className="description-wrapper">
                <h4 className="description-text">Search for any movie you'd like and nominate your favourites 🎉</h4>
            </div>
        </div>
    );
}

export default Header;