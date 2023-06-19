import React from 'react';

import './CircleInitialStyle.css';


const CircleInitial = ({username}) => {
    const text = username.charAt(0).toUpperCase();


    return (
        <div className={'circleInitial'}>
            <h2>{text}</h2>
        </div>
    );
};

export default CircleInitial;