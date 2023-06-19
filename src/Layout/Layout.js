import React from 'react';
import {Outlet} from 'react-router-dom';

import './LayoutStyle.css';


const Layout = () => {


    return (
        <div className={'layout width padding'}>
            <div className={'outlet'}>
                <Outlet/>
            </div>

        </div>
    );
};

export {Layout};