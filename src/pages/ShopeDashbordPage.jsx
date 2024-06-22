import React from 'react'
import DashbordHeader from "../components/Dashbord/DashbordHeader.jsx";
import DashbordSideBar from "../components/Dashbord/DashbordSideBar.jsx";
import DashbordHero from "../components/Dashbord/DashbordHero.jsx";

const ShopeDashbordPage = () => {
  return (
    <div>
     <DashbordHeader/>
     <div className='flex items-start justify-normal w-full'>
     <div className='w-[100px] 800px:w-[330px]'>
     <DashbordSideBar active={1}/>

     </div>
     <DashbordHero/>

     </div>
    </div>
  )
}

export default ShopeDashbordPage
