import React from "react";
import styles from "../../styles/styles";
import CountDown from "./CountDown.jsx";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/actions/cart";
import { toast } from "react-toastify";

const EventCard = ({ active, data }) => {
  console.log(data)
   const { cart } = useSelector((state) => state.cart);

   const dispatch= useDispatch()

    
    const addToCartHandler = (data) => {
    const isItemExists = cart && cart.find((i) => i._id === data._id);
    if (isItemExists) {
      toast.error("Item already in cart!");
    } else {
      if (data.stock < 1) {
        toast.error("Product stock limited!");
      } else {
        const cartData = { ...data, qty: 1 };
        dispatch(addToCart(cartData));
        toast.success("Item added to cart successfully!");
      }
    }
  }

  return (
    <div className='w-full block bg-white rounded-lg ${active ? "unset" : mb-12} lg:flex p-2 '>
      <div className="w-full lg:w-[50%] m-auto">
        <img src="https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg" alt="" />
      </div>
      <div className="w-full lg:w-[50%] flex flex-col justify-center">
        <h2 className={`${styles.productTitle}`}>Iphone 14pro max 8/256gb</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit placeat
          tempora ipsum alias eveniet ad hic aliquid culpa quia? Quisquam porro
          quis, nostrum omnis, illum natus optio nisi voluptatum accusantium
          ullam, voluptate quae. Quidem consectetur architecto obcaecati ipsam,
          voluptate laboriosam quisquam rem omnis asperiores ratione perferendis
          dignissimos laudantium vel quasi ea qui dolores ducimus deserunt eum
          repellat repellendus nulla? Repellat numquam quibusdam doloremque.
          Optio voluptatem ipsa consequatur eum porro nemo eaque in explicabo
          commodi? Mollitia et earum necessitatibus quae aspernatur ullam.
          Blanditiis iusto iure, quae aut, similique odit maxime eaque unde
          cumque cupiditate, dolores libero recusandae. Repudiandae veniam ullam
          eius.
        </p>
        <div className="flex py-2 justify-between">
          <div className="flex">
            <h5 className="font-[500] text-[18px] text-red-600 pr-3 line-through">
              9999$
            </h5>
            <h5 className="font-bold text-gray-700 text-[18px]">77$</h5>
          </div>
          <span className="font-[400] text-[17px] text-green-500 pr-3 pb-2">
            120 sold
          </span>
        </div>
        <CountDown />
        <br />
        <div className="flex items-center">
          <Link to={`/product/${data}`}>
            <div className={`${styles.button} text-white`}>See Details</div>
          </Link>
          <div
            className={`${styles.button} text-white ml-5`}
            onClick={() => addToCartHandler(data)}
          >
            Add to cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard ;
