import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";


import './CommentsStyle.css';
import {getAllComments, getCommentsMore} from "../../store";
import Comment from "../Comment/Comment";


const Comments = () => {
    const {commentsArr, skip} = useSelector(store => store.comments);
    const dispatch = useDispatch();
    console.log(commentsArr);

    let skp = skip;


    useEffect(() => {
        dispatch(getAllComments(skp))
    }, [dispatch, skp]);


    const addMoreHandler = useCallback(() => {
        skp = skp + 10;
        dispatch(getCommentsMore(skp));
    }, [skp]);


    return (
        <div className={'comments width'}>
            {
                commentsArr &&
                commentsArr.map(obj => <Comment key={obj.id} obj={obj}/>)
            }

            <div className={'btn'}>
                <button onClick={addMoreHandler}>ADD MORE</button>
            </div>
        </div>
    );
};

export {Comments};