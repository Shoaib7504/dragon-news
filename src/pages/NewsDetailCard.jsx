import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router';

const NewsDetailCard = ({ news }) => {
    console.log(news);

    return (
        <div className="space-y-5 w-212.5 mx-auto">
            <img
                className=" w-full h-87.5 object-cover"
                src={news.image_url}
                alt=""
            />
            <h2 className="text-2xl">{news.title}</h2>

            <p>{news.details}</p>
            <Link className="btn border-0 hover:bg-[#D72050]" to={`/category/${news.category_id}`}>
                {" "}
              <span><FaArrowLeft /></span>  All news in this category
            </Link>
        </div>
    );
};

export default NewsDetailCard;