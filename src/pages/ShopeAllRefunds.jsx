import React from 'react'
import DashbordHeader from '../components/Dashbord/DashbordHeader';
import DashbordSideBar from '../components/Dashbord/DashbordSideBar';
import AllRefundOrder from "../components/Dashbord/AllRefundOrder.jsx";

const ShopeAllRefunds = () => {
  return (
    <div>
      <DashbordHeader />
      <div className="flex items-center justify-normal w-full">
        <div className="w-[100px] 800px:w-[330px]">
          <DashbordSideBar active={10} />
        </div>
        <div className='w-full justify-center flex'>
      <AllRefundOrder/>
        </div>
      </div>
    </div>
  );
}

export default ShopeAllRefunds
