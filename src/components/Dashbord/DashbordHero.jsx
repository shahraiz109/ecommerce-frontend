import React from "react";
import { AiOutlineMoneyCollect } from "react-icons/ai";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";

const DashbordHero = () => {
  return (
    <div className="w-full p-8">
      <h3 className="text-[22px] font-Poppins pb-2">Overview</h3>
      <div className="w-full block 800px:flex items-center justify-between">
        <div className="w-full mb-4 800px:w-[30%] min-h-[20vh] bg-white shadow rounded px-2 py-5">
          <div className="flex items-center">
            <AiOutlineMoneyCollect
              size={30}
              fill="#00000085"
              className="mr-2"
            />
            <h3
              className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-blue-900`}
            >
              Account Balance{" "}
              <span className="text-[16px] text-black">
                (with 10% service charges!)
              </span>
            </h3>
          </div>
          <h5 className="text-[22px] font-[500] pt-2 pl-9">${100}</h5>
          <Link to="/dashbord-withdraw-money" className="pl-3 mt-4">
            <h5 className="text-[22px] ml-5 mt-2 text-blue-500">
              Withdraw
              Money
            </h5>
          </Link>
        </div>
        <div className="w-full mb-4 800px:w-[30%] min-h-[20vh] bg-white shadow rounded px-2 py-5">
          <div className="flex items-center">
            <AiOutlineMoneyCollect
              size={30}
              fill="#00000085"
              className="mr-2"
            />
            <h3
              className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-blue-900`}
            >
              All Orders
            </h3>
          </div>
          <h5 className="text-[22px] font-[500] pt-2 pl-9">12</h5>
          <Link to="/dashbord-order" className="pl-3 mt-4">
            <h5 className="text-[22px] ml-5 mt-2 text-blue-500">View Order</h5>
          </Link>
        </div>

        <div className="w-full mb-4 800px:w-[30%] min-h-[20vh] bg-white shadow rounded px-2 py-5">
          <div className="flex items-center">
            <AiOutlineMoneyCollect
              size={30}
              fill="#00000085"
              className="mr-2"
            />
            <h3
              className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-blue-900`}
            >
              All Products
              
            </h3>
          </div>
          <h5 className="text-[22px] font-[500] pt-2 pl-9">5</h5>
          <Link to="/dashbord-products" className="pl-3 mt-4">
            <h5 className="text-[22px] ml-5 mt-2 text-blue-500">
             View Product
            </h5>
          </Link>
        </div>
      </div>
      <br/>
      <h3 className="text-[22px] pb-2 font-Poppins">Latest Orders</h3>
      <div className="w-full h-[40vh] rounded bg-gray-200">

      </div>
    </div>
  );
};

export default DashbordHero;
