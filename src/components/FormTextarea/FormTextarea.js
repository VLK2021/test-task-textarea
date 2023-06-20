import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import './FormTextareaStyle.css';
import {commentActions} from "../../store";


const FormTextarea = () => {
    const {register, handleSubmit, setValue} = useForm();
    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.getItem('saveText')) {
            setValue('text', localStorage.getItem('saveText'));
        }
    }, [setValue]);

    const submit = (data) => {
        localStorage.setItem('saveText', data.text);

        const userObj = {
            id: new Date().getTime(),
            body: data.text,
            user: {
                username: 'Pics.Io'
            }
        }
        dispatch(commentActions.createComment(userObj));
    }


    return (
        <div className={'form width'}>
            <form onSubmit={handleSubmit(submit)}>
                <div className={'width'}>
                    <div className={'textarea-container'}>
                        <textarea className={'custom-textarea'} {...register('text')} cols='100' rows="8"/>
                    </div>

                    <div className={'btn-block-send width'}>
                        <button className={'btn-send'}>Send</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FormTextarea;