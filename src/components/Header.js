import React from 'react';
import { FiSearch, FiCalendar, FiMessageCircle, FiBell } from 'react-icons/fi';
import pic1 from '../assets/pic1.jpg'
const Header = () => {
  return (
    <header className="flex items-center justify-between p-2">
      {/* Left side - Search Bar */}
      <div className="relative">
      <div
          className="absolute left-2.5 top-2.5 bottom-2.5"
        //   style={{
        //     left: '8.33%',
        //     right: '12.5%',
        //     top: '8.33%',
        //     bottom: '12.5%',
        //     border: '1.5px solid #787486',
        //   }}
        >
          <FiSearch className="h-full w-full p-1" />
        </div>
        <input
          type="text"
          placeholder="Search for anything..."
          className="p-2 pl-10 bg-white border border-gray-300 rounded"
          style={{
            boxSizing: 'border-box',
            width: '417px',
            height: '44px',
            background: '#F5F5F5',
            borderRadius: '6px',
          }}
        />
       
      </div>

      {/* Right side - Icons, User Name, Profile Photo */}
      <div className="flex items-center space-x-4">
        <button className="p-2 text-gray-600 hover:text-blue-500">
          <FiCalendar />
        </button>
        <button className="p-2 text-gray-600 hover:text-blue-500">
          <FiMessageCircle />
        </button>
        <button className="p-2 text-gray-600 hover:text-blue-500">
          <FiBell />
        </button>
        <div>
        <div className="font-bold ">Anima Agarwal</div>
        <div className='text-gray-500'>U.P, India</div>
        </div>
        
        <img
          src={pic1}
          alt="Profile"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </header>
  );
};

export default Header;
