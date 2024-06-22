import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cart";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../redux/actions/wishlist";
import { toast } from "react-toastify";
import { getallProduct } from "../../redux/actions/product";
import profile from "../../assets/ali.png";
import axios from "axios";
import { server } from "../../server";

const ProductDetails = ({ data }) => {
  const { cart } = useSelector((state) => state.cart);
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const { wishlist } = useSelector((state) => state.wishlist);
  const { products } = useSelector((state) => state.products);
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(null);
  const [select, setSelect] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getallProduct(data && data?.shop._id));
    if (wishlist && wishlist.find((i) => i._id === data?._id)) {
      setClick(true);
    } else {
      setClick(false);
    }
  }, [data, wishlist]);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const dispatch = useDispatch();

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const removeWishistHandler = (data) => {
    setClick(!click);
    dispatch(removeFromWishlist(data));
  };

  const addWishlistHandler = (data) => {
    setClick(!click);
    dispatch(addToWishlist(data));
  };

  const addToCartHandler = (id) => {
    const isItemExist = cart && cart.find((i) => i._id === id);
    if (isItemExist) {
      toast.error("this item is already existing!");
    } else {
      if (data.stock < 1) {
        toast.error("product stock limited!");
      } else {
        const cartData = { ...data, qty: count };
        dispatch(addToCart(cartData));
        toast.success("Item successfully aded into cart");
      }
    }
  };

  const handleMessageSubmit = async () => {
    if (isAuthenticated) {
      const groupTitle = data._id + user._id;
      const userId = user._id;
      const sellerId = data.shop._id;

      await axios
        .post(`${server}/inbox-message`, {
          groupTitle,
          userId,
          sellerId,
        })
        .then((res) => {
          navigate("/message");
        })
        .catch((error) => {
          toast.error(error.response.data.message);
        });
    } else {
      toast.error("please login to continue inbox!");
    }
  };

  const totalReviwesLength =
    products &&
    products.reduce((acc, product) => acc + product.reviews.length, 0);

  return (
    <>
      <div className="bg-white">
        {data ? (
          <div className={`${styles.section} w-[90%] 800px:w-[80%]`}>
            <div className="w-full py-5">
              <div className="block w-full 800px:flex">
                <div className="w-full 800px:w-[50%]">
                  <img
                    src={data.image_Url[select].url}
                    alt=""
                    className="w-[80%]"
                  />
                  <div className="w-full flex">
                    <div
                      className={`${
                        select === 0 ? "border" : "null"
                      } cursor-pointer`}
                    >
                      <img
                        src={data?.image_Url[0].url}
                        alt=""
                        className="h-[200px]"
                        onClick={() => setSelect(0)}
                      />
                    </div>
                    <div
                      className={`${
                        select === 1 ? "border" : "null"
                      } cursor-pointer`}
                    >
                      <img
                        src={data?.image_Url[1].url}
                        alt=""
                        className="h-[200px]"
                        onClick={() => setSelect(1)}
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full 800px:w-[50%] pt-5">
                  <h1 className={`${styles.productTitle}`}>{data.name}</h1>
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
                    className={`${styles.button} !mt-6 !rounded !h-11 flex items-center`}
                    onClick={() => addToCartHandler(data._id)}
                  >
                    <span className="text-white flex items-center">
                      Add to Cart <AiOutlineShoppingCart className="ml-1" />
                    </span>
                  </div>
                  <div className="flex items-center pt-8">
                    <img
                      src={data.shop.shop_avatar.url}
                      alt=""
                      className="w-[50px] h-[50px] rounded-full mr-2"
                    />

                    <div className="pr-8">
                      <h3 className={`${styles.shop_name} pb-1 pt-1`}>
                        {data.shop.name}
                      </h3>
                      <h5 className="pb-3 text-[15px]">
                        ({data.shop.ratings}) Ratings
                      </h5>
                    </div>
                    <Link to="/message">
                      <div
                        className={`${styles.button} bg-blue-500 mt-4 !rounded !h-11`}
                        onClick={handleMessageSubmit}
                      >
                        <span className="text-white flex items-center">
                          Send Message <AiOutlineMessage className="ml-1" />
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <ProductInfo data={data} totalReviwesLength={totalReviwesLength} />
            <br />
            <br />
          </div>
        ) : null}
      </div>
    </>
  );
};

const ProductInfo = ({ data, totalReviwesLength }) => {
  const [active, setActive] = useState(1);

  return (
    <div className="bg-gray-200 px-3 800px:px-10 py-2 rounded ">
      <div className="w-full flex justify-between border-b pt-10 pb-2">
        <div className="relative">
          <h5
            className="text-[18px] px-1 leading-5 font-600 cursor-pointer 800px:text-20-[20px] text-black"
            onClick={() => setActive(1)}
          >
            Product Drtails
          </h5>
          {active === 1 ? (
            <div className={`${styles.active_indicator}`}></div>
          ) : null}
        </div>
        <div className="relative">
          <h5
            className="text-[18px] px-1 leading-5 font-600 cursor-pointer 800px:text-20-[20px] text-black"
            onClick={() => setActive(2)}
          >
            Product Reviews
          </h5>
          {active === 2 ? (
            <div className={`${styles.active_indicator}`}></div>
          ) : null}
        </div>
        <div className="relative">
          <h5
            className="text-[18px] px-1 leading-5 font-600 cursor-pointer 800px:text-20-[20px] text-black"
            onClick={() => setActive(3)}
          >
            Seller Information
          </h5>
          {active === 3 ? (
            <div className={`${styles.active_indicator}`}></div>
          ) : null}
        </div>
      </div>
      {active === 1 ? (
        <>
          <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            culpa nisi officia laborum blanditiis, aliquam obcaecati fuga
            consectetur fugit architecto. Ullam explicabo at officia amet
            reprehenderit consectetur similique omnis et. Modi, beatae impedit.
            Sed velit dolore fugiat numquam, sit nulla perspiciatis autem iusto
            cum consequatur, commodi qui pariatur inventore? Inventore, eveniet?
            Totam esse numquam enim ad eveniet voluptates, accusantium
            exercitationem nulla quod, molestiae aliquid unde. Minima animi
            magnam culpa nobis molestias accusamus ratione fugit, distinctio
            sunt perspiciatis debitis. Repellendus vero ex ipsum iste neque
            eligendi consequuntur, optio magnam itaque iure necessitatibus id
            praesentium aliquid beatae distinctio saepe quae amet at!
          </p>
          <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            culpa nisi officia laborum blanditiis, aliquam obcaecati fuga
            consectetur fugit architecto. Ullam explicabo at officia amet
            reprehenderit consectetur similique omnis et. Modi, beatae impedit.
            Sed velit dolore fugiat numquam, sit nulla perspiciatis autem iusto
            cum consequatur, commodi qui pariatur inventore? Inventore, eveniet?
            Totam esse numquam enim ad eveniet voluptates, accusantium
            exercitationem nulla quod, molestiae aliquid unde. Minima animi
            magnam culpa nobis molestias accusamus ratione fugit, distinctio
            sunt perspiciatis debitis. Repellendus vero ex ipsum iste neque
            eligendi consequuntur, optio magnam itaque iure necessitatibus id
            praesentium aliquid beatae distinctio saepe quae amet at!
          </p>
          <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            culpa nisi officia laborum blanditiis, aliquam obcaecati fuga
            consectetur fugit architecto. Ullam explicabo at officia amet
            reprehenderit consectetur similique omnis et. Modi, beatae impedit.
            Sed velit dolore fugiat numquam, sit nulla perspiciatis autem iusto
            cum consequatur, commodi qui pariatur inventore? Inventore, eveniet?
            Totam esse numquam enim ad eveniet voluptates, accusantium
            exercitationem nulla quod, molestiae aliquid unde. Minima animi
            magnam culpa nobis molestias accusamus ratione fugit, distinctio
            sunt perspiciatis debitis. Repellendus vero ex ipsum iste neque
            eligendi consequuntur, optio magnam itaque iure necessitatibus id
            praesentium aliquid beatae distinctio saepe quae amet at!
          </p>
        </>
      ) : null}

      {active === 2 ? (
        <div className="w-full min-h-[40vh] flex flex-col items-center justify-center">
          {data && data.reviews ? (
            data.reviews.map((item, index) => (
              <div className="w-full flex my-2" key={index}></div>
            ))
          ) : (
            <>
              <div className="w-full flex my-2">
                <img
                  src={profile}
                  alt=""
                  className="w-[10vh] h-[10vh] rounded-full mt-4 ml-10"
                />
                <h1 className="font-semi-bold ml-3 mt-10 text-[12px]">
                  Mehar Ali
                </h1>
                <img
                  src={profile}
                  alt=""
                  className="w-[10vh] h-[10vh] rounded-full mt-4 ml-10"
                />
                <h1 className="font-semi-bold text-ellipsis text-[12px] ml-3 mt-10">
                  Shahraiz Ali
                </h1>
              </div>
              <Link to="/">
                <div
                  className={`${styles.button} !rounded-[4px] mt-3 !h-[40px] items-center  `}
                >
                  <h4 className="text-white ">Visit Shope</h4>
                </div>
              </Link>
            </>
          )}
        </div>
      ) : null}

      {active === 3 ? (
        <div className="w-full block 800px:flex p-5">
          <div className="w-full 800px:w-[50%]">
            <div className="flex items-center">
              <img
                src={data.shop.shop_avatar.url}
                alt=""
                className="w-[50px] h-[50px] rounded-full"
              />
              <div className="pl-3">
                <h3 className={`${styles.shop_name}`}>{data.shop.name}</h3>
                <h5 className="pb-2 text-[15px]">
                  ({data.shop.ratings}) Ratings
                </h5>
              </div>
            </div>
            <p className="pt-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              itaque quod commodi praesentium deserunt? Quibusdam numquam vel
              delectus aut consequuntur dolorem eaque molestias aliquam qui
              fugit perferendis et fuga maxime est, inventore nam deleniti nemo
              cum eos illo nulla voluptatum magni. Minus, nesciunt. Quidem
              doloribus, rem dolorum blanditiis adipisci atque obcaecati
              consequatur. Hic doloremque alias id ratione aut numquam non dolor
              quidem sapiente inventore quam ullam, voluptates facere, nisi
              tenetur!
            </p>
          </div>
          <div className="w-full 800px:w-[50%] mt-5 800px:mt-0 flex flex-col items-end">
            <div className="text-left">
              <h5 className="font-[600]">
                Joined On: <span className="font-[500]">14 march,2023</span>
              </h5>
              <h5 className="font-[600] pt-3">
                Total Products:
                <span className="font-[500]">142023</span>
              </h5>
              <h5 className="font-[600] pt-3">
                Total Reviews:
                <span className="font-[500]">{totalReviwesLength}</span>
              </h5>
              <Link to="/">
                <div
                  className={`${styles.button} !rounded-[4px] mt-3 !h-[40px] items-center  `}
                >
                  <h4 className="text-white ">Visit Shope</h4>
                </div>
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProductDetails;
