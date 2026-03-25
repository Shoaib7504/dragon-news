import React from 'react';
import Navbar from '../../Components/Shared/Navbar';
import { Outlet, useNavigate } from 'react-router';
import LatestNews from '../../Components/LatestNews';
import Header from '../../Components/Header';
import LeftAside from '../../Components/HomeLayout/LeftAside';
import RightAside from '../../Components/HomeLayout/RightAside';
import Loading from '../../pages/Loading';

const Home = () => {
    const { state } = useNavigate()
    return (
        <div className='w-11/12 mx-auto'>
            <Navbar></Navbar>
            <section>
                <LatestNews></LatestNews>
            </section>
            <section>
                <Header></Header>
            </section>
            <main className='w-11/12 gap-3 mx-auto grid grid-cols-12'>
                <section className='Left-nav col-span-3 sticky top-4 h-fit'>
                    <LeftAside></LeftAside>
                </section>
                <section className='col-span-6'>
                    {
                        state == "loading" ? <Loading></Loading> : <Outlet></Outlet>
                    }
                </section>
                <section className='Right-nav col-span-3 sticky top-4 h-fit'>
                    <RightAside></RightAside>
                </section>
            </main>
        </div>
    );
};

export default Home;