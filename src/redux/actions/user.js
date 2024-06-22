import axios from "axios";
import { server } from "../../server";

// Load user
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LoadUserRequest",
    });

    const response = await axios.get(`${server}/user/get/user`, {
      withCredentials: true,
    });

    if (response && response.data && response.data.user) {
      dispatch({
        type: "LoadUserSuccess",
        payload: response.data.user,
      });
    } else {
      // Handle the case where the response does not contain the expected data
      dispatch({
        type: "LoadUserFail",
        payload: "Invalid response from server",
      });
    }
  } catch (error) {
    // Handle any errors that occurred during the request
    dispatch({
      type: "LoadUserFail",
      payload: error.response
        ? error.response.data.message
        : "An error occurred",
    });
  }
};

// Load seller
export const loadSeller = () => async (dispatch) => {
  try {
    dispatch({
      type: "LoadSellerRequest",
    });

    const response = await axios.get(`${server}/shop/get/seller`, {
      withCredentials: true,
    });

    if (response && response.data && response.data.user) {
      dispatch({
        type: "LoadSellerSuccess",
        payload: response.data.user,
      });
    } else {
      // Handle the case where the response does not contain the expected data
      dispatch({
        type: "LoadSellerFail",
        payload: "Invalid response from server",
      });
    }
  } catch (error) {
    // Handle any errors that occurred during the request
    dispatch({
      type: "LoadSellerFail",
      payload: error.response
        ? error.response.data.message
        : "An error occurred",
    });
  }
};

// user upate information //

export const updateUserInfo =
  (name, email, password, phoneNumber) => async (dispatch, action) => {
    try {
      dispatch({
        type: "updateUserInfoRequest",
      });

      const { data } = await axios.put(
        `${server}/user/update-user-info`,
        {
          name,
          email,
          password,
          phoneNumber,
        },
        {
          withCredentials: true,
        }
      );

      dispatch({
        type: "updateUserInfoSuccess",
        payload: data.user,
      });
    } catch (error) {
     dispatch({
       type: "updateUserInfoFail",
       payload: error.response.data.message,
     });
    }
  };

// update user Addresss information //

export const updateUserAdress =
  (country, city, address1, address2, addressType) => async (dispatch) => {
    try {
      dispatch({
        type: "upateUserAddressRequest",
      });

      const { data } = await axios.put(`${server}/user/update-user-adsresses`, {
        country,
        city,
        address1,
        address2,
        addressType,
      });

      dispatch({
        type: "upateUserAddressSuccess",
        payload: data.user,
      });
    } catch (error) {
      dispatch({
        type: "upateUserAddressFail",
        payload: error.response.data.message,
      });
    }
  };

  // get all user -- admin

  export const getAllUsers= () => async(dispatch)=> {
    try {

   dispatch({
     type: "getAllUserRequest",
   });


   const { data } = await axios.get(`${server}/user/admin-all-user`);

   dispatch({
     type: "getAllUserSuccess",
     payload:data.user
   });

    } catch (error) {
      dispatch({
        type: "getAllUserFail",
        payload: error.response.data.message,
      });
    }
  }