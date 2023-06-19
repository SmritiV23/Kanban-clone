import React from 'react';
import { FiHome, FiMessageSquare, FiCheckSquare, FiUsers, FiSettings } from 'react-icons/fi';

import { HiLightBulb } from 'react-icons/hi';
const Sidebar = () => {
  return (
    <div className="sidebar gap-y-0">
      <div className="flex h-screen">
        <div className="my-10">
          <SidebarItem icon={<FiHome />} label="Home" />
          <SidebarItem icon={<FiMessageSquare />} label="Messages" />
          <SidebarItem icon={<FiCheckSquare />} label="Tasks" />
          <SidebarItem icon={<FiUsers />} label="Members" />
          <div className=" h-0.5 bg-gray-300 my-4"></div>
          <SidebarItem circleColor="#7AC555" label="Mobile App" />
          <SidebarItem circleColor="#FFA500" label="Website Design" />
          <SidebarItem circleColor="#E4CCFD" label="Design System" />
          <SidebarItem circleColor="#76A5EA" label="Wireframes" />
        </div>
        
      </div>
      <div className="">
            <ThoughtsTime />
          </div>
    </div>
  );
};

const SidebarItem = ({ icon, label, circleColor }) => {
  const hasIcon = !!icon;

  return (
    <div>
      <div className="flex items-center w-64 p-2 mb-2 rounded-lg hover:bg-blue-400 hover:bg-opacity-25 cursor-pointer">
      {hasIcon && <div className="w-6 h-6 flex-shrink-0 mr-2">{icon}</div>}
      {!hasIcon && (
        <div className="w-3 h-3 rounded-full mr-2">
          <div
            className="w-full h-full rounded-full"
            style={{ backgroundColor: circleColor }}
          ></div>
        </div>
      )}
      <div className="font-bold">{label}</div>
      <div className="flex-grow text-right text-gray-500">
        <span>...</span>
      </div>
    
    </div>
    
    </div>
    
  );
};

const ThoughtsTime = () => {
  return (
    <div className="flex  flex-col items-center ">
      <div className=" w-20 h-20 rounded-full bg-[#f0edcb] flex items-center justify-center">
        <HiLightBulb className="animate-pulse text-4xl text-yellow-500" />
      </div>
      <div className='flex flex-col  w-60 h-56 ml-5 mb-5 mr-5  items-center bg-[#ece8e8] rounded'>
      <div className="text-lg font-semibold mb-2">Thoughts Time</div>
      <div className="text-gray-600 text-center mb-4">
        We don't have any notice for you, till then you can share your thoughts with your peers.
      </div>
      <button className="px-4 py-2 bg-white text-black rounded">
        Write a message
      </button>
      </div>
      
    </div>
  );
};

export default Sidebar;
