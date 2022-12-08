import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';

const Main = () => {
    return (
        <div className='grid lg:grid-cols-12'>
            <div className='lg:col-span-1 lg:block hidden bg-primary'>
                <Header />
            </div>
            <div className='col-span-11'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;
