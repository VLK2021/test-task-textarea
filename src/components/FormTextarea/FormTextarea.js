import React from 'react';
import {useForm} from "react-hook-form";

import './FormTextareaStyle.css';


const FormTextarea = () => {
    const {register, handleSubmit} = useForm();

    const submit = (data) => {
        console.log(data);
    }


    return (
        <div className={'form width'}>
            <form onSubmit={handleSubmit(submit)}>
                <div className={'width'}>
                    <div className={'textarea-container'}>
                        <textarea className={'custom-textarea'} {...register('text')} cols='100' rows="10"/>
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