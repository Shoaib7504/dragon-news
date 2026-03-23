import Navbar from '../Components/Shared/Navbar';
import { Outlet, useParams } from 'react-router';
import RightAside from '../Components/HomeLayout/RightAside';
import { useLoaderData } from 'react-router';
import { useEffect, useState } from 'react';
import NewsDetailCard from './NewsDetailCard';

const NewsDetails = () => {
    const { id } = useParams()
    const data = useLoaderData();
    const [news, setNews] = useState({});
    // console.log(news);

    useEffect(() => {

        const NewsDetails = data.find(singleNews => singleNews.id == id);
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setNews(NewsDetails);

    }, [data, id]);
    return (
        <div>
            <Navbar></Navbar>
            <main className='w-11/12 mt-4 gap-5 mx-auto grid grid-cols-12 '>
                <section className='col-span-9'>
                    <h1 className='font-semibold text-xl mb-5 ml-20'>Dragon News</h1>
                   <NewsDetailCard news={news}></NewsDetailCard>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;