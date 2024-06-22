import React from "react";
import { AiOutlineGift } from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { MdOutlineLocalOffer } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { backend_url } from "../../../server";

const AdminHeader = () => {

   const {user}= useSelector((state)=> state.user)

  return (
    <div className="w-fill h-[80px] bg-white shadow sticky top-0 left-0 flex items-center justify-between px-4">
      <div>
        <Link to="/" className="800px:block hidden">
          <img
            src="https://shopo.quomodothemes.website/assets/images/logo.svg"
            alt=""
          />
        </Link>
      </div>
      <div className="flex items-center bg-red-500">
        <div className="flex items-center mr-4">
          <Link to="/dashbord/cupouns" className="800px:block hidden">
            <AiOutlineGift
              size={30}
              color="#555"
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link to="/dashbord-events" className="800px:block hidden">
            <MdOutlineLocalOffer
              size={30}
              color="#555"
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link to="/dashbord-products" className="800px:block hidden">
            <FiShoppingBag
              size={30}
              color="#555"
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link to="/dashbord-orders" className="800px:block hidden">
            <FiPackage size={30} color="#555" className="mx-5 cursor-pointer" />
          </Link>
          <Link to="/dashbord-inbox" className="800px:block hidden">
            <BiMessageSquareDetail
              size={30}
              color="#555"
              className="mx-5 cursor-pointer"
            />
          </Link>
          <img
            src={`${backend_url}${user?.avatar}`}
            alt=""
            className="w-[50px] h-[50px] rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
