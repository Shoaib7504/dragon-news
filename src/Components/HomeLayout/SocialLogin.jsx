import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div className='grid grid-col gap-y-3'>
            <h1 className='text-xl font-semibold'>Login With</h1>
            <button className=' btn  bg-gray-100 border-0 w-11/12 hover:bg-[#D72050]'><span><FaGoogle /></span> Login With Google</button>
            <button className=' btn  bg-gray-100 border-0  w-11/12 hover:bg-[#D72050]'> <span><FaGithub /></span>Login With github</button>
        </div>
    );
};

export default SocialLogin;