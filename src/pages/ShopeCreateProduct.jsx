import React from 'react'
import DashbordHeader from '../components/Dashbord/DashbordHeader';
import DashbordSideBar from '../components/Dashbord/DashbordSideBar';
import CreateProduct from "../components/Shope/CreateProduct.jsx";


const ShopeCreateProduct = () => {
  return (
    <div>
      <DashbordHeader />
      <div className="flex items-center justify-normal w-full">
        <div className="w-[100px] 800px:w-[330px]">
          <DashbordSideBar active={4} />
        </div>
        <div className="w-full flex justify-center">
          <CreateProduct />
        </div>
      </div>
    </div>
  );
}

export default ShopeCreateProduct
