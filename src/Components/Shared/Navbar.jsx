import React from 'react';
import logo from '../../assets/logo.png'
import { format } from 'date-fns';
const Navbar = () => {
    return (
        <div className='items-center justify-items-center mt-3'>
            <img src={logo} alt="" />
            <h2 className= ' mt-2 text-gray-300 text-xl'>Journalism Without Fear or Favour</h2>
            <p className='mt-2 text-gray-600 font-semibold text-xl'>{format(new Date(), "EEEE, MMMM MM yyyy")}</p>
        </div>
    );
};

export default Navbar;