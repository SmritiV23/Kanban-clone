import React from 'react';
import SidebarHeader from './SidebarHeader';
import Sidebar from './Sidebar';
import Header from './Header';
import Body from './Body';
import Filter from './Filter';

const KanbanDashboard = () => {
  

  return (
    <div className="flex ">
      {/* Sidebar Header */}
      <div className='flex-col '>
      <header className="w-64 h-16  border">
        {/* Sidebar Header content */}
        <div className="text-xl font-bold ">
          <SidebarHeader></SidebarHeader>
        </div>
      </header>

      {/* Sidebar */}
     
        <div className="w-64 h-screen"><Sidebar></Sidebar></div>
      
      </div>
     

      {/* Main Content */}
      <div className="flex-grow">
        {/* Header */}
        <header className="h-16 border">
          {/* Header content */}
          <div ><Header></Header></div>
        </header>
        
        <div className=''><Filter></Filter></div>
        {/* Body */}
        <div className=" flex-grow">
          {/* Kanban board */}
          <Body></Body>
        </div>
      </div>
    </div>
  );
};

export default KanbanDashboard;
