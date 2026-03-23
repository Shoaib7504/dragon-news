import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='w-11/12 mx-auto min-h-screen'>
          <Header></Header>
          <main className=' py-5'>
            <Outlet></Outlet>
          </main>
        </div>
    );
};

export default AuthLayout;