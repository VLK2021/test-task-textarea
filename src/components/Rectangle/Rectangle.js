import React from 'react';

import './RectangleStyle.css';
import CircleInitial from "../CircleInitial/CircleInitial";


const Rectangle = ({username}) => {
    let newUserName = username.charAt(0).toUpperCase() + username.slice(1);

    return (
        <div>
            <div className={'big-circle'}>
                <CircleInitial username={username}/>
            </div>

            <div className={'rectangle'}>
                {newUserName}
            </div>
        </div>
    );
};

export {Rectangle};