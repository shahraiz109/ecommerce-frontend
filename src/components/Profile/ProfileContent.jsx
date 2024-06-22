import React, { useEffect, useState } from "react";
import { backend_url } from "../../server.js";
import { useDispatch, useSelector } from "react-redux";
import {
  AiOutlineArrowRight,
  AiOutlineCamera,
  AiOutlineDelete,
} from "react-icons/ai";
import styles from "../../styles/styles.js";
import profile from "../../assets/ali.png";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import { MdOutlineTrackChanges } from "react-icons/md";
import { CiShoppingBasket } from "react-icons/ci";
import { updateUserAdress, updateUserInfo } from "../../redux/actions/user.js";
import { toast } from "react-toastify";
import { Country, State, getState } from "country-state-city";
// import { response } from "express";
import axios from "axios";
import { server } from "../../server.js";
import { RxCross1 } from "react-icons/rx";
// import { MdEmail } from "react-icons/md";

const ProfileContent = ({ active }) => {
  const { user, error } = useSelector((state) => state.user);
  const [name, setName] = useState(user && user.name);
  const [email, setEmail] = useState(user && user.email);
  const [number, setNumber] = useState();
  const [zipcode, setZipcode] = useState();
  const [adress1, setAdress1] = useState();
  const [address2, setAdress2] = useState();
  const [password, setPassword] = useState();
  const [phoneNumber, setPhoneNumber] = useState(user && user.phoneNumber);
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearErrors" });
    }
  }, []);

  // const handleImage=(e) => {
  //   setAvatar(e.target.value)
  // }
  const dispatch = useDispatch();

  const naviagte = useNavigate();

  const handel = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePhone = (e) => {
    setNumber(e.target.value);
  };

  const handleZip = (e) => {
    setZipcode(e.target.value);
  };
  const handleAddress1 = (e) => {
    setAdress1(e.target.value);
  };
  const handleAddress2 = (e) => {
    setAdress2(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserInfo(name, email, password, phoneNumber));
  };

  const handleImage = async (e) => {
    const file = e.target.files[0];
    setAvatar(file);

    const formData = new FormData();

    formData.append("image", e.target.files);

    await axios
      .put(`${server}/user/upload-avatat`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        window.location.reload();
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="w-full">
      {/* profile page */}

      {active === 1 && (
        <>
          <div className="flex justify-center w-full">
            <div className="relative">
              <img
                src=""
                alt=""
                className=" h-[350px] w-[250px] rounded-full object-cover border-[3px] border-green-500 "
              />
              <div className="w-[30px] h-[30px] bg-gray-200 flex items-center justify-center cursor-pointer absolute bottom-1 right-1">
                <input
                  type="file"
                  id="image"
                  className="hidden"
                  onChange={handleImage}
                />
                <label htmlFor="image">
                  <AiOutlineCamera />
                </label>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="w-full px-5">
            <form onSubmit={handleSubmit} aria-required={true}>
              <div className="800px:flex block w-full pb-3">
                <div className="w-[100%] 800px:w-[50%]">
                  <label className="block pb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                    value={name}
                    onChange={handel}
                  />
                </div>

                <div className="w-[100%] 800px:w-[50%]">
                  <label className="block pb-2">Email Address</label>
                  <input
                    type="text"
                    required
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                    value={email}
                    onChange={handleEmail}
                  />
                </div>
              </div>
              <div className="800px:flex block w-full pb-3">
                <div className="w-[100%] 800px:w-[50%]">
                  <label className="block pb-2">Phone Number</label>
                  <input
                    type="number"
                    required
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                    value={number}
                    onChange={handlePhone}
                  />
                </div>
              </div>

              <div className="800px:flex block w-full pb-3">
                <div className="w-[100%] 800px:w-[50%]">
                  <label className="block pb-2">Enter Your Password</label>
                  <input
                    type="password"
                    required
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                    value={password}
                    onChange={handlePassword}
                  />
                </div>
              </div>

              <input
                type="submit"
                value="Update Now"
                required
                className={`w-[250px] h-[40px] border border-blue-400 text-center text-white bg-black rounded-[3px] mt-8 cursor-pointer`}
              />
            </form>
          </div>
        </>
      )}

      {/* order page */}

      {active === 2 && (
        <div>
          <AllOrders />
        </div>
      )}
      {/* refund page */}

      {active === 3 && (
        <div>
          <AllRefundOrders />
        </div>
      )}
      {/* track order page */}
      {active === 5 && (
        <div>
          <TrackOrder />
        </div>
      )}
      {/*change password page */}
      {active === 6 && (
        <div>
          <ChangePassword />
        </div>
      )}
      {/*user adress */}
      {active === 7 && (
        <div>
          <Address />
        </div>
      )}
    </div>
  );
};

const AllOrders = () => {
  const orders = [
    {
      _id: "7463hvbfbhfbrtr288220221",
      orderItems: [
        {
          name: "Iphone 12 pro max",
        },
      ],
      totalPrice: "637637",
      orderStatus: "processing",
    },
  ];

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },

    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/order/${params.id}`}>
              <Button>
                <AiOutlineArrowRight size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = [];

  orders &&
    orders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.orderItems.length,
        total: "US$ " + item.totalPrice,
        status: item.status,
      });
    });

  return (
    <div className="pl-8 pt-1 flex-col">
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={20}
        disableSelectionOnClick
        autoHeight
      />
    </div>
  );
};

const AllRefundOrders = () => {
  const orders = [
    {
      _id: "7463hvbfbhfbrtr288220221",
      orderItems: [
        {
          name: "Iphone 12 pro max",
        },
      ],
      totalPrice: "637637",
      orderStatus: "processing",
    },
  ];
  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },

    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/order/${params.id}`}>
              <Button>
                <AiOutlineArrowRight size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = [];

  orders &&
    orders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.orderItems.length,
        total: "US$ " + item.totalPrice,
        status: item.status,
      });
    });
  return (
    <div className="pl-8 pt-1">
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        autoHeight
      />
    </div>
  );
};

const TrackOrder = () => {
  const orders = [
    {
      _id: "7463hvbfbhfbrtr288220221",
      orderItems: [
        {
          name: "Iphone 12 pro max",
        },
      ],
      totalPrice: "637637",
      orderStatus: "processing",
    },
  ];

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },

    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/order/${params.id}`}>
              <Button>
                <MdOutlineTrackChanges size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];
  const row = [];

  orders &&
    orders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.orderItems.length,
        total: "US$ " + item.totalPrice,
        status: item.status,
      });
    });
  return (
    <div className="pl-8 pt-1">
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        autoHeight
      />
    </div>
  );
};

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const PasswordChangeHandler = async (e) => {
    e.preventDefault();

    await axios
      .put(`${server}/user/update-user-password`, {
        oldPassword,
        newPassword,
        confirmPassword,
      })
      .then((res) => {
        toast.success(res.data.success)
        setOldPassword("")
        setNewPassword("")
        setConfirmPassword("")
      }).catch((error)=>{
       toast.error(error.response.data.message)
      }) 
       };
  return (
    <div className="w-full px-5">
      <h1 className="text-[26px] block text-center font-[600] text-gray-800">
        Change Password
      </h1>
      <div className="w-full">
        <form
          aria-required
          onSubmit={PasswordChangeHandler}
          className="flex flex-col items-center"
        >
          <div className="w-[100%] 800px:w-[50%] mt-5">
            <label className="block pb-2">Enter Your Old Password</label>
            <input
              type="password"
              required
              className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>
          <div className="w-[100%] 800px:w-[50%] mt-2">
            <label className="block pb-2">Enter New Password</label>
            <input
              type="password"
              required
              className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="w-[100%] 800px:w-[50%] mt-2">
            <label className="block pb-2">Confirm New Password</label>
            <input
              type="password"
              required
              className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <input
            type="submit"
            value="Update Now"
            required
            className={`w-[250px] h-[40px] border border-blue-400 text-center text-white bg-black rounded-[3px] mt-8 cursor-pointer mr-5`}
          />
        </form>
      </div>
    </div>
  );
};

const Address = () => {
  const [open, setOpen] = useState(false);
  const [country, setCountry] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [adress1, setAdress1] = useState("");
  const [adress2, setAdress2] = useState("");
  const [city, setCity] = useState("");
  const [addressType, setAddressType] = useState("");

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  const handleZip = (e) => {
    setZipcode(e.target.value);
  };
  const handleAddress1 = (e) => {
    setAdress1(e.target.value);
  };
  const handleAddress2 = (e) => {
    setAdress2(e.target.value);
  };

  const addressData = [
    {
      name: "Default",
    },
    {
      name: "Home",
    },
    {
      name: "School",
    },
    {
      name: "Office",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (addressType === "" || country === "" || city === "") {
      toast.error("please provide adress!");
    } else {
      dispatch(updateUserAdress(country, city, adress1, adress2, addressType));
    }
  };

  return (
    <div className="w-full px-5">
      {open && (
        <div className="fixed w-full h-screen bg-gray-400 top-0 left-0 flex items-center justify-center">
          <div className="w-[35%] h-[80vh] bg-white rounded shadow relative overflow-y-scroll">
            <div className="w-full flex justify-end p-3">
              <RxCross1
                size={30}
                className="cursor-pointer"
                onClick={() => setOpen(false)}
              />
            </div>
            <h1 className="text-center text-[25px] font-Poppins">
              Add A New Address
            </h1>
            <div className="w-full">
              <form aria-required onSubmit={handleSubmit}>
                <div className="w-full block p-4">
                  <div className="w-full pb-2">
                    <label className="block pb-2">Country</label>
                    <select
                      name=""
                      id=""
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="w-[95%] border h-[40px] rounded-[5px]"
                    >
                      <option value="" className="block border pb-2">
                        Choose A Country
                      </option>
                      {Country &&
                        Country.getAllCountries().map((item) => (
                          <option
                            className="block pb-2"
                            key={item.isoCode}
                            value={item.isoCode}
                          >
                            {item.name}
                          </option>
                        ))}
                    </select>
                  </div>

                  <div className="w-full pb-2">
                    <label className="block pb-2">Choose your city</label>
                    <select
                      name=""
                      id=""
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-[95%] border h-[40px] rounded-[5px]"
                    >
                      <option value="" className="block border pb-2">
                        Choose A City
                      </option>
                      {State &&
                        State.getStatesOfCountry(country).map((item) => (
                          <option
                            className="block pb-2"
                            key={item.isoCode}
                            value={item.isoCode}
                          >
                            {item.name}
                          </option>
                        ))}
                    </select>
                  </div>

                  <div className="w-full pb-2">
                    <label className="block pb-2">Address 1</label>
                    <input
                      type="address"
                      required
                      value={adress1}
                      onChange={handleAddress1}
                      className={`${styles.input}`}
                    />
                  </div>
                  <div className="w-full pb-2">
                    <label className="block pb-2">Address 2</label>
                    <input
                      type="address"
                      required
                      value={adress2}
                      onChange={handleAddress2}
                      className={`${styles.input}`}
                    />
                  </div>

                  <div className="w-full pb-2">
                    <label className="block pb-2">Zip Code</label>
                    <input
                      type="number"
                      required
                      value={zipcode}
                      onChange={handleZip}
                      className={`${styles.input}`}
                    />
                  </div>
                  <div className="w-full pb-2">
                    <label className="block pb-2">Address Type</label>
                    <select
                      name=""
                      id=""
                      value={addressType}
                      onChange={(e) => setAddressType(e.target.value)}
                      className="w-[95%] border h-[40px] rounded-[5px]"
                    >
                      <option value="" className="block border pb-2">
                        Choose Your Addrress Type
                      </option>
                      {addressData &&
                        addressData.map((item) => (
                          <option
                            className="block pb-2"
                            key={item.name}
                            value={item.name}
                          >
                            {item.name}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div className="w-full pb-2">
                    <input
                      type="submit"
                      className={`${styles.input} mt-5 cursor-pointer`}
                      required
                      readOnly
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      <div className="w-full flex items-center justify-between">
        <h1 className="text-[26px] font-[600] text-gray-800">My Address</h1>
        <div
          className={`${styles.button} !rounded-md`}
          onClick={() => setOpen(true)}
        >
          <span className="text-white">Add New</span>
        </div>
      </div>
      <br />
      <div className="w-full bg-white h-[70px] rounded-[4px] px-3 shadow flex items-center justify-between pr-10">
        <div className="flex items-center">
          <h5 className="pl-5 font-[600]">Default</h5>
        </div>
        <div className="pl-8 flex items-center">
          <h6 className="text-gray-800 font-[500]">1762 Zatoon City</h6>
        </div>
        <div className="pl-8 flex items-center">
          <h6 className="text-gray-800 font-[500]">(1762)-78637518</h6>
        </div>
        <div className="min-w-[10%] pl-8 flex items-center justify-between">
          <AiOutlineDelete size={20} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default ProfileContent;
