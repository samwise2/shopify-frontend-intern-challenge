import React from 'react';
import './SectionTitle.css';

export function SectionTitle(props) {
    return (
        <div className="search-input-text-wrapper">
            <h3 className="search-input-text">{props.text}</h3>
        </div>
    );
}

export default SectionTitle;