import React from 'react'
import DashbordSideBar from '../components/Dashbord/DashbordSideBar';
import DashbordHeader from '../components/Dashbord/DashbordHeader';
// import ShopMoney from "../components/"
import ShopMoney from "../components/Dashbord/ShopMoney.jsx";

const ShopWithdrawMoney = () => {
  return (
    <div>
      <DashbordHeader />
      <div className="flex items-start justify-normal w-full">
        <div className="w-[100px] 800px:w-[330px]">
          <DashbordSideBar active={7} />
        </div>
      <ShopMoney/>
      </div>
    </div>
  );
}

export default ShopWithdrawMoney
