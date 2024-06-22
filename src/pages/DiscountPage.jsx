import React from 'react'
import DiscountShop from "../components/Shope/DiscountShop.jsx";
import DashbordHeader from '../components/Dashbord/DashbordHeader.jsx';
import DashbordSideBar from '../components/Dashbord/DashbordSideBar.jsx';

const DiscountPage = () => {
  return (
    <div>
      <DashbordHeader />
      <div className="flex items-center justify-normal w-full">
        <div className="w-[100px] 800px:w-[330px]">
          <DashbordSideBar active={9} />
        </div>
        <div className="w-full flex justify-center">
          <DiscountShop />
        </div>
      </div>
    </div>
  );
}

export default DiscountPage
