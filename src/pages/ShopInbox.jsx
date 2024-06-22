import React from 'react'
import DashbordHeader from '../components/Dashbord/DashbordHeader';
import DashbordSideBar from '../components/Dashbord/DashbordSideBar';
import ShopChat from "../components/Dashbord/ShopChat.jsx";

const ShopInbox = () => {
  return (
    <div>
      <DashbordHeader />
      <div className="flex items-start justify-normal w-full">
        <div className="w-[100px] 800px:w-[330px]">
          <DashbordSideBar active={8} />
        </div>
        <ShopChat />
      </div>
    </div>
  );
}

export default ShopInbox
