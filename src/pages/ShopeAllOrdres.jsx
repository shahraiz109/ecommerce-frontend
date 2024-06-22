import React from 'react'
import DashbordHeader from '../components/Dashbord/DashbordHeader'
import DashbordSideBar from '../components/Dashbord/DashbordSideBar'
import AllOrdres from "../components/Dashbord/AllOrdres.jsx";

const ShopeAllOrdres = () => {
  return (
  <div>
      <DashbordHeader />
      <div className="flex items-center justify-normal w-full">
        <div className="w-[100px] 800px:w-[330px]">
          <DashbordSideBar active={2} />
        </div>
        <div className="w-full flex justify-center">
          <AllOrdres/>
        </div>
      </div>
    </div>
  )
}

export default ShopeAllOrdres
