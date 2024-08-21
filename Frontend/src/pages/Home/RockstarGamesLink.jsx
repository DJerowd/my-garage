import React from 'react';
import './Styles.css';

const RockstarGamesLink = () => {
    const handleClick = () => {
        window.location.href = "https://www.rockstargames.com/";
    };

    return (
        <button className={'RockstarGamesLink'} onClick={handleClick} title='Visitar Rockstar Games'>Visitar Rockstar Games</button>
    );
};

export default RockstarGamesLink;