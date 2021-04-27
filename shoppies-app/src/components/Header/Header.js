import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css';

export function Header(props) {
    return (
        <div className="header-wrapper">
            <h1 className="header-text">The Shoppies</h1>
        </div>
    );
}

export default Header;