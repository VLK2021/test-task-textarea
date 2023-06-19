import React from 'react';
import {useDispatch} from "react-redux";

import './CircleDeleteStyle.css';
import {commentActions} from "../../store";


const CircleDelete = ({id}) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(commentActions.deleteComment(id))
    }


    return (
        <button className={'circleDelete'} onClick={handleDelete}>
            X
        </button>
    );
};

export default CircleDelete;