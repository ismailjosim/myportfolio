import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';

const Main = () => {
    return (
        <div className='grid grid-cols-12'>
            <div className='col-span-1 bg-primary'>
                <Header />
            </div>
            <div className='col-span-11'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;
