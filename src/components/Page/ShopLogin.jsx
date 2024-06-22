import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import style from "../../styles/styles";
import { Link, useNavigate } from "react-router-dom";
import { server } from "../../server.js";
import axios from "axios";
import { toast } from "react-toastify";


const ShopLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const navigate = useNavigate();

  const handelSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(`${server}/shop/login-shop`, {
        email,
        password,
      })
      .then((res) => {
        if (res && res.data) {
          toast.success("Login success!");
          navigate("/dashbord");
          window.location.reload(true);
        } else {
          // Handle the case where 'res' or 'res.data' is undefined
          console.error("Response or data is undefined:", res);
        }
      });

  };

  return (
    <div className="min-h-screen bg-gray-50  flex-col justify-center flex items-center py-12 sm:px-6 lg:px-8">
      <div className=" sm:w-full sm:max-w-md">
        <h2 className="mt-6 justify-center text items-center text-center text-3xl font-extrabold text-gray-900">
          Login to your shop
        </h2>
      </div>
      <div className="mt-8 text  sm:max-auto sm:w-full sm:max-w-md">
        <div className=" bg-white py-8 px-4 shadow sm:rounded sm:px-10">
          <form className="space-y-6" onSubmit={handelSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  type={visible ? "text" : "password"}
                  name="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {visible ? (
                  <AiOutlineEye
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>
            </div>

            <div className={`${style.noramlFlex} justify-between`}>
              <div className={`${style.noramlFlex}`}>
                <input
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a
                  href=".forget-password"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Forget password ?
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-black"
              >
                Submit
              </button>
            </div>
            <div className={`${style.noramlFlex} w-full`}>
              <h4>Not have an account? </h4>
              <Link to="/create-shop" className="text-blue-600">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ShopLogin;
