import React from "react";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import {AiOutlineFolderAdd, AiOutlineGift} from "react-icons/ai"
import {MdOutlineLocalOffer} from "react-icons/md"
import { RxDashboard } from "react-icons/rx";
import {VscNewFile} from "react-icons/vsc"
import {CiMoneyBill, CiSettings} from "react-icons/ci"
import {HiOutlineReceiptRefund} from "react-icons/hi"
import {BiMessageSquareDetail} from "react-icons/bi"
import { Link } from "react-router-dom";

const DashbordSideBar = ({active}) => {
  return (
    <div className="w-full h-[89vh] bg-white shadow-sm overflow-y-scroll static top-0 left-0 z-10">
      <div className="flex items-center w-full p-4">
        <Link to="/dashbord" className="w-full flex items-center">
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
        <Link to="/dashbord-orders" className="w-full flex items-center">
          <FiShoppingBag size={30} className="text-yellow-800" />
          <h5
            className={`800px:block hidden pl-2 text-[18px] font-[400] ${
              active === 2 ? "text-red-600" : "text-[#555]"
            }`}
          >
            All Orders
          </h5>
        </Link>
      </div>
      <div className="flex items-center w-full p-4">
        <Link to="/dashbord-products" className="w-full flex items-center">
          <FiPackage size={30} className="text-yellow-800" />
          <h5
            className={`800px:block hidden pl-2 text-[18px] font-[400] ${
              active === 3 ? "text-red-600" : "text-[#555]"
            }`}
          >
            All Products
          </h5>
        </Link>
      </div>
      <div className="flex items-center w-full p-4">
        <Link
          to="/dashbord-create-product"
          className="w-full flex items-center"
        >
          <AiOutlineFolderAdd size={30} className="text-yellow-800" />
          <h5
            className={`800px:block hidden pl-2 text-[18px] font-[400] ${
              active === 4 ? "text-red-600" : "text-[#555]"
            }`}
          >
            Create Product
          </h5>
        </Link>
      </div>
      <div className="flex items-center w-full p-4">
        <Link to="/dashbord-events" className="w-full flex items-center">
          <MdOutlineLocalOffer size={30} className="text-yellow-800" />
          <h5
            className={`800px:block hidden pl-2 text-[18px] font-[400] ${
              active === 5 ? "text-red-600" : "text-[#555]"
            }`}
          >
            All Events
          </h5>
        </Link>
      </div>
      <div className="flex items-center w-full p-4">
        <Link to="/dashbord-create-event" className="w-full flex items-center">
          <VscNewFile size={30} className="text-yellow-800" />
          <h5
            className={`800px:block hidden pl-2 text-[18px] font-[400] ${
              active === 6 ? "text-red-600" : "text-[#555]"
            }`}
          >
            Create Events
          </h5>
        </Link>
      </div>
      <div className="flex items-center w-full p-4">
        <Link
          to="/dashbord-withdraw-money"
          className="w-full flex items-center"
        >
          <CiMoneyBill size={30} className="text-yellow-800" />
          <h5
            className={`800px:block hidden pl-2 text-[18px] font-[400] ${
              active === 7 ? "text-red-600" : "text-[#555]"
            }`}
          >
            Withdraw Money
          </h5>
        </Link>
      </div>
      <div className="flex items-center w-full p-4">
        <Link to="/dashbord-inbox" className="w-full flex items-center">
          <BiMessageSquareDetail size={30} className="text-yellow-800" />
          <h5
            className={`800px:block hidden pl-2 text-[18px] font-[400] ${
              active === 8 ? "text-red-600" : "text-[#555]"
            }`}
          >
            Shop Inbox
          </h5>
        </Link>
      </div>
      <div className="flex items-center w-full p-4">
        <Link to="/dashbord/cupouns" className="w-full flex items-center">
          <AiOutlineGift size={30} className="text-yellow-800" />
          <h5
            className={`800px:block hidden pl-2 text-[18px] font-[400] ${
              active === 9 ? "text-red-600" : "text-[#555]"
            }`}
          >
            Discount Codes
          </h5>
        </Link>
      </div>
      <div className="flex items-center w-full p-4">
        <Link to="/dashbord-refund" className="w-full flex items-center">
          <HiOutlineReceiptRefund size={30} className="text-yellow-800" />
          <h5
            className={`800px:block hidden pl-2 text-[18px] font-[400] ${
              active === 10 ? "text-red-600" : "text-[#555]"
            }`}
          >
            Refunds
          </h5>
        </Link>
      </div>
      <div className="flex items-center w-full p-4">
        <Link to="/dashbord-setting" className="w-full flex items-center">
          <CiSettings size={30} className="text-yellow-800" />
          <h5
            className={`800px:block hidden pl-2 text-[18px] font-[400] ${
              active === 11 ? "text-red-600" : "text-[#555]"
            }`}
          >
            Settings
          </h5>
        </Link>
      </div>
    </div>
  );
};

export default DashbordSideBar;
