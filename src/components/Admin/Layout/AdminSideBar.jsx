import React from "react";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import { CiMoneyBill, CiSettings } from "react-icons/ci";
import {FaShopify} from "react-icons/fa"
import { HiOutlineUserGroup } from "react-icons/hi";
import { Link } from "react-router-dom";
import { MdOutlineLocalOffer } from "react-icons/md";
import { BiShoppingBag } from "react-icons/bi";

const AdminSideBar = ({ active }) => {
  return (
    <div className="w-full h-[89vh] bg-white shadow-sm overflow-y-scroll static top-0 left-0 z-10">
      <div className="flex items-center w-full p-4">
        <Link to="/dashbord-admin" className="w-full flex items-center">
          <RxDashboard size={30} className="text-yellow-800" />
          <h5
            className={`800px:block hidden pl-2 text-[18px] font-[400] ${
              active === 1 ? "text-red-600" : "text-[#555]"
            }`}
          >
            Dashboard
          </h5>
        </Link>
      </div>
      <div className="flex items-center w-full p-4">
        <Link to="/dashbord-products" className="w-full flex items-center">
          <FiShoppingBag size={30} className="text-yellow-800" />
          <h5
            className={`800px:block hidden pl-2 text-[18px] font-[400] ${
              active === 2 ? "text-red-600" : "text-[#555]"
            }`}
          >
            All Products
          </h5>
        </Link>
      </div>
       <div className="flex items-center w-full p-4">
        <Link to="/dashbord-orders" className="w-full flex items-center">
          <BiShoppingBag size={30} className="text-yellow-800" />
          <h5
            className={`800px:block hidden pl-2 text-[18px] font-[400] ${
              active === 3 ? "text-red-600" : "text-[#555]"
            }`}
          >
            All Orders
          </h5>
        </Link>
      </div>
       <div className="flex items-center w-full p-4">
        <Link to="/dashbord-events" className="w-full flex items-center">
          <MdOutlineLocalOffer size={30} className="text-yellow-800" />
          <h5
            className={`800px:block hidden pl-2 text-[18px] font-[400] ${
              active === 4 ? "text-red-600" : "text-[#555]"
            }`}
          >
            All Events
          </h5>
        </Link>
      </div>
      <div className="flex items-center w-full p-4">
        <Link to="/admin-seller" className="w-full flex items-center">
          <FaShopify size={30} className="text-yellow-800" />
          <h5
            className={`800px:block hidden pl-2 text-[18px] font-[400] ${
              active === 5 ? "text-red-600" : "text-[#555]"
            }`}
          >
            All Seller
          </h5>
        </Link>
      </div>
       <div className="flex items-center w-full p-4">
        <Link to="/admin-user" className="w-full flex items-center">
          <HiOutlineUserGroup size={30} className="text-yellow-800" />
          <h5
            className={`800px:block hidden pl-2 text-[18px] font-[400] ${
              active === 6 ? "text-red-600" : "text-[#555]"
            }`}
          >
            All User
          </h5>
        </Link>
      </div>
      <div className="flex items-center w-full p-4">
        <Link
          to="/dashbord-withdraw-request"
          className="w-full flex items-center"
        >
          <CiMoneyBill size={30} className="text-yellow-800" />
          <h5
            className={`800px:block hidden pl-2 text-[18px] font-[400] ${
              active === 7 ? "text-red-600" : "text-[#555]"
            }`}
          >
            Withdraw Request
          </h5>
        </Link>
      </div>
       <div className="flex items-center w-full p-4">
        <Link to="/profile" className="w-full flex items-center">
          <FiShoppingBag size={30} className="text-yellow-800" />
          <h5
            className={`800px:block hidden pl-2 text-[18px] font-[400] ${
              active === 8 ? "text-red-600" : "text-[#555]"
            }`}
          >
           Setting
          </h5>
        </Link>
      </div>
    </div>
  );
};

export default AdminSideBar;
