import React from 'react';
import { FaComment, FaFile } from 'react-icons/fa';
const Card = ({ title }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-500">Card description goes here...</p>
      <div className='flex justify-end m-2'>
      <FaComment className="h-4 w-4 mt-2 ml-1 mr-1 text-gray-500" />
        <span className="text-gray-500 text-sm mt-2 mb-2 ml-1 mr-1">Comments</span>
        <FaFile className="h-4 w-4 mt-2  ml-1 mr-1 text-gray-500" />
        <span className="text-gray-500 text-sm mt-2 mb-2 ml-1 mr-1">Files</span>
      </div>
    </div>
  );
};

export default Card;
