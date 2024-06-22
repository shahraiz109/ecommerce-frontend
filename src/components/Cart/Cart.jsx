import React, { useState } from "react";
import styles from "../../styles/styles";
import { RxCross1 } from "react-icons/rx";
import { HiOutlineMinus, HiPlus } from "react-icons/hi";
import { IoBagHandleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { backend_url } from "../../server";

const Cart = ({ setOpenCart }) => {
  const { cart } = useSelector((state) => state.cart);

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.qty * item.discountPrice,
    0
  );

  return (
    <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
      <div className="fixed top-0 right-0 min-h-full w-[25%] bg-white flex flex-col justify-between shadow-sm">
        <div>
          <div className="flex w-full justify-end pt-5 pr-5">
            <RxCross1
              size={25}
              className="cursor-pointer"
              onClick={() => setOpenCart(false)}
            />
          </div>
          {/* items length */}

          <div className={`${styles.noramlFlex} p-4`}>
            <IoBagHandleOutline size={25} />
            <h5 className="pl-2 text-[20px] font-[500]">3 Items</h5>
          </div>
          {/* cart single item */}
          <br />
          <div className="w-full border-t">
            {cart &&
              cart.map((i, index) => <CartSingle data={i} key={index} />)}
          </div>
        </div>
        <div className="px-5 mb-3">
          {/* checkout buttons */}
          <Link to="/checkout">
            <div className="h-[45px] flex items-center justify-center w-full rounded-[5px] bg-red-400">
              <h1 className="text-[#fff] text-[18px] font-[600]">
                CheckOut Now (USD${totalPrice})
              </h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

const CartSingle = ({ data, totalPrice }) => {
  const [value, setValue] = useState(data.qty);
  totalPrice = data.discountPrice * value;

  const increment = (data) => {
    setValue(value + 1);
    const updateCartDat = { ...data, qty: value + 1 };
  };

  const decrement = (data) => {
    setValue(value === 1 ? 1 : value - 1);
    const updateCartDat = { ...data, qty: value === 1 ? 1 : value - 1 };
  };

  return (
    <div className="border=b p-4">
      <div className="w-full flex items-center">
        <div>
          <div
            className={`bg-red-500 border border-gray-700 rounded-full w-[25px] h-25px] justify-center cursor-pointer ${styles.noramlFlex}`}
            onClick={() => increment(value + 1)}
          >
            <HiPlus size={18} color="#fff" />
          </div>
          <span className="pl-[10px]">{data.qty}</span>
          <div
            className="bg-gray-300 rounded-full w-[25px] h-[25px] flex items-center justify-center cursor-pointer"
            onClick={() => setValue(value === 1 ? 1 : value - 1)}
          >
            <HiOutlineMinus size={16} color="#7d879c" />
          </div>
        </div>
        <img
          src={`${backend_url} ${data?.images}`}
          alt=""
          className="w-[80px] h-[80px] ml-2"
        />
        <div className="pl-[5px]">
          <h1>{data.name}</h1>
          <h4 className="font-400 text-[15px] text-green-600">
            ${data.price} * {value}
          </h4>
          <h4 className="font-[600] text-[17px] pt-[3px] font-Roboto text-red-600">
            US${totalPrice}
          </h4>
        </div>
        <RxCross1 className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Cart;
