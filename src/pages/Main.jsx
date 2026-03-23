import React from 'react';
import { useLoaderData } from 'react-router';
import AllNews from './AllNews';

const Main = () => {
    const data = useLoaderData();
    // console.log(data);

    return (
        <div>
            {
                data.map(news => <AllNews key={news.category_id} news={news}></AllNews>)
            }
        </div>
    );
};

export default Main;