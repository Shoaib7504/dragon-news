import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import image from '../assets/demo-user.png'
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {
  const { user,logOut } = use(AuthContext);
  const handelLogout=()=>{
    console.log('user trying to logout');
    logOut()
    
  }
  return (
    <div className='flex justify-between text-center items-center mt-5'>
      <div>{user && user.email}</div>
      <div className='flex gap-5'>
        <NavLink className='text-gray-400' to='/'>Home</NavLink>
        <NavLink className='text-gray-400' to='/about'>About</NavLink>
        <NavLink className='text-gray-400' to='/career'>Career</NavLink>
      </div>
      <div className="flex gap-4">
        <img src={image} alt="" />
        {
          user ?
            (<button onClick={handelLogout} className='px-5 bg-gray-600 btn text-white text-center rounded-xl cursor-pointer'>LogOut</button>)
            :
            (<Link to='/auth/login' className='px-5 bg-gray-600 btn text-white text-center rounded-xl cursor-pointer'>login</Link>)
        }

      </div>
    </div>
  );
};

export default Header;