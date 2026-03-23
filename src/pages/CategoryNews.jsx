import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams, } from 'react-router';
import NewsCard from '../Components/HomeLayout/NewsCard';

const CategoryNews = () => {
    const { id } = useParams();
    const data = useLoaderData();
    // console.log(data);
    const [categoryNews, setCategoryNews] = useState([]);
    // FILTER THE NEWS DATA
    useEffect(() => {
        const filteredNews = data.filter(news => news.category_id == id)
        console.log(filteredNews);
        setCategoryNews(filteredNews);

    }, [data, id])

    return (
        <div>
            <h2 className="font-bold mb-5">
                Total <span className="text-secondary">{categoryNews.length}</span> news
                Found
            </h2>

            <div className="grid grid-cols-1 gap-5">
                {categoryNews.map((news) => (
                    <NewsCard key={news.id} news={news}></NewsCard>
                ))}
            </div>
        </div>
    );
};

export default CategoryNews;