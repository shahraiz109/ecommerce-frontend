import React from 'react'
import AdminHeader from "../components/Admin/Layout/AdminHeader.jsx";
import AdminSideBar from "../components/Admin/Layout/AdminSideBar.jsx";
import AdminDashbordMain from "../components/Admin/AdminDashbordMain.jsx";

const AdminDashbordPage = () => {
  return (
    <div>
      <AdminHeader/>
      <div className="w-full flex">
        <div className='w-[30%]'>
    <AdminSideBar/>
        </div>
        <div className='w-[70%]'>
          <AdminDashbordMain/>
        </div>
      </div>
    </div>
  )
}

export default AdminDashbordPage
