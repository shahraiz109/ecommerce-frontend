import React from "react";
import { RxPerson } from "react-icons/rx";
import styles from "../../styles/styles";
import { HiOutlineReceiptRefund, HiOutlineShoppingBag } from "react-icons/hi";
import {
  AiOutlineCreditCard,
  AiOutlineLogout,
  AiOutlineMessage,
} from "react-icons/ai";
import {RiLockPasswordFill} from "react-icons/ri";
import { MdOutlineTrackChanges } from "react-icons/md";
import { TbAddressBook } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { server } from "../../server";
import axios from "axios";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const ProfileSidebar = ({ active, setActive }) => {

   const {user}= useSelector((state)=> state.user)

  const navigate = useNavigate();

  const logoutHandler = () => {
    axios
      .get(`${server}/user/logout`)
      .then((res) => {
        toast.success(res.data.message);
        window.location.reload(true);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };

  return (
    <div className="w-full shadow-sm bg-gray-200 rounded-[10px] pt-8 p-4">
      <div
        className="w-full flex items-center mb-8 cursor-pointer"
        onClick={() => setActive(1)}
      >
        <RxPerson size={20} color={active === 1 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 1 ? "text-[red]" : ""
          } 800px:block hidden`}
        >
          Profile
        </span>
      </div>
      <div
        className="w-full flex items-center mb-8 cursor-pointer"
        onClick={() => setActive(2)}
      >
        <HiOutlineShoppingBag size={20} color={active === 2 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 2 ? "text-[red]" : ""
          } 800px:block hidden`}
        >
          Orders
        </span>
      </div>
      <div
        className="w-full flex items-center mb-8 cursor-pointer"
        onClick={() => setActive(3)}
      >
        <HiOutlineReceiptRefund size={20} color={active === 3 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 3 ? "text-[red]" : ""
          } 800px:block hidden`}
        >
          Refunds
        </span>
      </div>
      <div
        className="w-full flex items-center mb-8 cursor-pointer"
        onClick={() => setActive(4) || navigate("/inbox")}
      >
        <AiOutlineMessage size={20} color={active === 4 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 4 ? "text-[red]" : ""
          } 800px:block hidden`}
        >
          Inbox
        </span>
      </div>
      <div
        className="w-full flex items-center mb-8 cursor-pointer"
        onClick={() => setActive(5)}
      >
        <MdOutlineTrackChanges size={20} color={active === 5 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 5 ? "text-[red]" : ""
          } 800px:block hidden`}
        >
          Track Order
        </span>
      </div>
      <div
        className="w-full flex items-center mb-8 cursor-pointer"
        onClick={() => setActive(6)}
      >
        <RiLockPasswordFill size={20} color={active === 6 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 6 ? "text-[red]" : ""
          } 800px:block hidden`}
        >
          Change Password
        </span>
      </div>
      <div
        className="w-full flex items-center mb-8 cursor-pointer"
        onClick={() => setActive(7)}
      >
        <TbAddressBook size={20} color={active === 7 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 7 ? "text-[red]" : ""
          } 800px:block hidden`}
        >
          Address
        </span>
      </div>

      <Link to="/admin-dashbord">
        <div
          className="w-full flex items-center mb-8 cursor-pointer"
          onClick={() => setActive(8)}
        >
          <TbAddressBook size={20} color={active === 8 ? "red" : ""} />
          <span
            className={`pl-3 ${
              active === 7 ? "text-[red]" : ""
            } 800px:block hidden`}
          >
            Admin Dashbord
          </span>
        </div>
      </Link>

      <div
        className="w-full flex items-center mb-8 cursor-pointer"
        onClick={() => setActive(9) || logoutHandler()}
      >
        <AiOutlineLogout size={20} color={active === 9 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 8 ? "text-[red]" : ""
          } 800px:block hidden`}
        >
          Logout
        </span>
      </div>
    </div>
  );
};

export default ProfileSidebar;
