import React from 'react';

const Card = ({ title }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-500">Card description goes here...</p>
    </div>
  );
};

export default Card;
