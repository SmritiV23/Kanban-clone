import React from 'react';
import { FaPencilAlt, FaLink , FaPlus } from 'react-icons/fa';
import { FiFilter, FiCalendar, FiUsers,FiChevronDown } from 'react-icons/fi';
import pic2 from '../assets/pic2.jpg'
import pic3 from '../assets/pic3.jpg'
import pic4 from '../assets/pic4.jpg'
import pic5 from '../assets/pic5.jpg'
const Filter = () => {
  return (
    <div className='p-4'>
      <div className="flex justify-between pt-4 ">
    <div className="flex">
      <h1 className="h-56 w-253 font-inter font-medium text-4xl capitalize">Mobile App</h1>
      <div className="flex">
        <div className="w-8 h-8 rounded  bg-purple-200 m-2 flex items-center justify-center">
          <div className="relative">
            <FaPencilAlt className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-purple-600" />
          </div>
        </div>
        <div className="w-8 h-8 rounded  bg-purple-200 m-2 flex items-center justify-center">
          <div className="relative">
            <FaLink className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-purple-600" />
          </div>
        </div>
        </div>
    </div>
        <div className='flex'>
        <div className="w-6 h-6 rounded  bg-purple-200 m-2 flex items-center justify-center">
        <div className="relative">
          <FaPlus className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-purple-600" />
        </div>
      </div>
      <div className='text-purple-600 font-medium text-xl m-2'>Invite</div>
      <img
          src={pic2}
          alt="Profile"
          className="w-8 h-8 rounded-full m-[-1]"
        />
       <img
          src={pic4}
          alt="Profile"
          className="w-8 h-8  rounded-full m-[-1]"
        />
         <img
          src={pic3}
          alt="Profile"
          className="w-8 h-8 rounded-full m-[-1]"
        />
         <img
          src={pic5}
          alt="Profile"
          className="w-8 h-8 rounded-full m-[-1]"
        />
        <div className="w-8 h-8 rounded-full  bg-pink-200 flex items-center justify-center m-[-1]">
          <div className='relative'>
          <div className=" text-pink-700 rounded-full">+2</div>
          </div>
        
        </div>
        </div>
  </div>
  <div className='flex justify-between'>
  <div className="flex">
          <button className="flex items-center justify-center w-36 h-12 border-gray-200 border-[2px] border-solid rounded-md ">
            <FiFilter className="mr-2 text-gray-500" />
            <div className='text-gray-600'> Filter</div>
           
            <FiChevronDown className="ml-2 text-gray-500" />
          </button>
          <button className="flex items-center justify-center w-36 h-12 border-gray-200 border-[2px] border-solid rounded-md ml-4">
            <FiCalendar className="mr-2 text-gray-500" />
            <div className='text-gray-600'>Today</div>
            
            <FiChevronDown className="ml-2 text-gray-500" />
          </button>
          </div>
          <div className="flex">
          <button className="flex items-center justify-center w-36 h-12 border-gray-200 border-[2px] border-solid rounded-md ml-4">
            <FiUsers className="mr-2 text-gray-500" />
            <div className='text-gray-600'>
            Share
            </div>
            
          </button>
            <div className="w-[2px] h-10 border-l bg-gray-300 m-1 ml-2"></div>
              <div className="w-10 h-10 bg-purple-600 rounded-md flex items-center justify-center m-1">
                <div>
                <div className="w-2 h-5 bg-white transform rotate-90 mb-[-10]"></div>
                <div className="w-2 h-5 bg-white transform rotate-90"></div>
                </div>
                
              </div>
              <div>
              <div className="w-2 h-2 rounded-full  border-[#787486] border-[1.5px] m-2"></div>
              <div className="w-2 h-2 rounded-full  border-[#787486] border-[1.5px] m-2"></div>
              </div>
             <div>
             <div className="w-2 h-2 rounded-full  border-[#787486] border-[1.5px]  mt-2 mb-2 ">
                
                </div>
                <div className="w-2 h-2 rounded-full border-[#787486] border-[1.5px]  mt-2 mb-2 ">
                
          </div>
             </div>
          
         
        </div>
       
  </div>
    </div>
    
  );
};

export default Filter;
