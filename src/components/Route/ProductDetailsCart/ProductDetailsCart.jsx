import React, { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import{ useDispatch, useSelector} from "react-redux"
import styles from "../../../styles/styles";
import { AiOutlineMessage, AiFillHeart, AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { addToCart } from "../../../redux/actions/cart";
import {toast} from "react-toastify"
import { addToWishlist, removeFromWishlist } from "../../../redux/actions/wishlist";

const ProductDetailsCart = ({ setOpen, data }) => {
    const {cart} = useSelector((state)=> state.cart)
    const { wishlist } = useSelector((state) => state.wishlist);
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  // const [select, setSelect] = useState(false);
  const dispatch= useDispatch()

  const handleMessageSubmit= () => {

  }

  const decrementCount= () => {
    if(count > 1){
      setCount(count - 1)
    }
  }

    const incrementCount = () => {
      setCount(count + 1)
    }

    const addToCartHandler = (id)=>{
      const isItemExist= cart && cart.find((i)=> i._id === id)
      if(isItemExist){
        toast.error("this item is already existing!")
      }else{
       if(data.stock < count){
        toast.error("product stock limited!")
       }else{
         const cartData = { ...data, qty: count };
         dispatch(addToCart(cartData));
         toast.success("Item successfully aded into cart");
       }
      }
    }

    

        useEffect(() => {
          if (wishlist && wishlist.find((i) => i.name === data.name)) {
            setClick(true);
          } else {
            setClick(false);
          }
        });

        const removeWishistHandler = (data) => {
          setClick(!click);
          dispatch(removeFromWishlist(data));
        };

        const addWishlistHandler = (data) => {
          setClick(!click);
          dispatch(addToWishlist(data));
        };

  return (
    <div className="bg-white">
      {data ? (
        <div className="fixed w-full h-screen top-0 left-0 bg-[#00000030] z-40 flex items-center justify-center">
          <div className="w-[90%] 800px:w-[60%] h-[90vh] overflow-y-scroll 800px:h-[75vh] bg-white rounded-md shadow-sm relative p-4">
            <RxCross1
              size={30}
              className="absolute right-3 top-3 z-50"
              onClick={() => setOpen(false)}
            />
            <div className="block w-full 800px:flex">
              <div className="w-full 800px:w-[50%]">
                <img src={data.image_Url[0].url} alt="" />
                <div className="flex">
                  <img
                    src={data.shop.shop_avatar.url}
                    alt=""
                    className="w-[50px] h-[50px] rounded-full mr-2"
                  />
                  <div>
                    <h3 className={`${styles.shop_name}`}>{data.shop.name}</h3>
                    <h5 className="pb-3 text-[15px]">
                      ({data.shop.ratings}) Ratings
                    </h5>
                  </div>
                </div>
                <div
                  className={`${styles.button} bg-[#000] mt-4 rounded-[4px] h-11`}
                  onClick={handleMessageSubmit}
                >
                  <span className="text-[#fff] flex items-center">
                    Send Message <AiOutlineMessage className="ml-1" />
                  </span>
                </div>
                <h5 className="text-[16px] text-[red] mt-5">
                  ({data.total_sell}) Sold out
                </h5>
              </div>
              {/* right side */}

              <div className="w-full 800px:w-[50%] pt-5 pl-[5x] pr-[5px]">
                <h1 className={`${styles.productTitle} text-[20px]`}>
                  {data.name}
                </h1>
                <p>{data.description}</p>
                <div className="flex pt-3">
                  <h4 className={`${styles.productDiscountPrice}`}>
                    {data.discount_price}$
                  </h4>
                  <h3 className={`${styles.price}`}>
                    {data.price ? data.price + "$" : null}
                  </h3>
                </div>
                <div className="flex items-center justify-between mt-12 pr-3">
                  <div>
                    <button
                      className="font-bold bg-gradient-to-r from-teal-600 text-white rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                      onClick={decrementCount}
                    >
                      -
                    </button>
                    <span className="bg-gray-200 text-gray-800 font-medium px-4 py-[11px]">
                      {count}
                    </span>
                    <button
                      className="font-bold bg-gradient-to-r  from-teal-500 text-white rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                      onClick={incrementCount}
                    >
                      +
                    </button>
                  </div>
                  <div>
                    {click ? (
                      <AiFillHeart
                        size={22}
                        className="cursor-pointer "
                        onClick={() => removeWishistHandler(data)}
                        color={click ? "red" : "#333"}
                        title="Remove from wishlist"
                      />
                    ) : (
                      <AiOutlineHeart
                        size={22}
                        className="cursor-pointer "
                        onClick={() => addWishlistHandler(data)}
                        color={click ? "red" : "#333"}
                        title="Add to wishlist"
                      />
                    )}
                  </div>
                </div>
                <div
                  className={`${styles.button} mt-6 rounded-[4px] h-11 flex items-center`}
                  onClick={() => addToCartHandler(data._id)}
                >
                  <span className="text-white flex items-center">
                    Add to Cart <AiOutlineShoppingCart className="ml-1" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProductDetailsCart;
