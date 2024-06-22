import React from 'react'
import AdminSideBar from '../components/Admin/Layout/AdminSideBar'
import AdminHeader from '../components/Admin/Layout/AdminHeader'
// import AllWithdraw from "../components/Admin/AllWithdraw.jsx";

const AdminDashbordUser = () => {
  return (
    <div>
   <AdminHeader/>
   <div className='w-full flex'>
   <div className='flex items-start justify-between w-full'>
   <div className='w-[80px] 800px:w-[330px]'>
<AdminSideBar active={1}/>
   </div>
  {/* <AllWithdraw/> */}
   </div>

   </div>
    </div>
  )
}

export default AdminDashbordUser
