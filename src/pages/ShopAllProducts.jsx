import React from 'react'
import DashbordHeader from '../components/Dashbord/DashbordHeader'
import DashbordSideBar from '../components/Dashbord/DashbordSideBar'
import AllProducts from "../components/Shope/AllProducts.jsx";

const ShopAllProducts = () => {
  return (
     <div>
      <DashbordHeader />
      <div className="flex items-center justify-normal w-full">
        <div className="w-[100px] 800px:w-[330px]">
          <DashbordSideBar active={3} />
        </div>
        <div className="w-full flex justify-center">
          <AllProducts/>
        </div>
      </div>
    </div>
  )
}

export default ShopAllProducts
