import React from 'react'
import DashbordHeader from '../components/Dashbord/DashbordHeader';
import DashbordSideBar from '../components/Dashbord/DashbordSideBar';
import CreateEvent from "../components/Shope/CreateEvent.jsx";

const ShopCreateEvent = () => {
  return (
    <div>
      <DashbordHeader />
      <div className="flex items-center justify-normal w-full">
        <div className="w-[100px] 800px:w-[330px]">
          <DashbordSideBar active={6} />
        </div>
        <div className="w-full flex justify-center">
          <CreateEvent />
        </div>
      </div>
    </div>
  );
}

export default ShopCreateEvent
