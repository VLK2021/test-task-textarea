import React from 'react';

import './CommentStyle.css';
import {Rectangle} from "../Rectangle/Rectangle";
import CircleDelete from "../CircleDelete/CircleDelete";


const Comment = ({obj}) => {
    const {id, body, user: {username}} = obj;

    return (
        <div className={'comment'}>
            <div className={'rec-circ'}>
                <div className={'block-rectangle'}>
                    <Rectangle username={username}/>
                </div>

                <div className={'bloc-circle-delete'}>
                    <CircleDelete id={id}/>
                </div>
            </div>
            {body}
            {id}
        </div>
    );
};

export default Comment;