import React from 'react';
import { NavLink } from 'react-router';
import image from '../assets/demo-user.png'

const Header = () => {
    return (
        <div className='flex justify-between text-center items-center mt-5'>
            <div></div>
          <div className='flex gap-5'>
              <NavLink className='text-gray-400' to='/'>Home</NavLink>
            <NavLink className='text-gray-400' to='/about'>About</NavLink>
            <NavLink className='text-gray-400' to='/career'>Career</NavLink>
          </div>
          <div className="flex gap-4">
            <img src={image} alt="" />
            <button className='px-5 bg-gray-600 text-white rounded-xl cursor-pointer'>login</button>
          </div>
        </div>
    );
};

export default Header;