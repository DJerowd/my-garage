import React from 'react';
import './Styles.css';

const GTABaseLink = () => {
    const handleClick = () => {
        window.location.href = "https://www.gtabase.com/grand-theft-auto-v/vehicles";
    };

    return (
        <button className={'GTABaseLink'} onClick={handleClick} title='Visitar GTA Base'>Visitar GTA Base</button>
    );
};

export default GTABaseLink;