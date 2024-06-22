
import axios from "axios"
import { server } from "../../server"

//  create product//

// import axios from "axios"
// import { MdErrorOutline } from "react-icons/md"

export const createProduct= (newForm) => async(dispatch)=> {
    try{

        dispatch({
            type:"productCreateRequest"
        })

        const config= {headers: {"Content-Type":"multipart/form-data"}}

        const { data } = await axios.post(
          `${server}/product/create-product`,
          newForm,
          config
        );
        dispatch({
          type: "productCreateRequest",
          payload:data.product
        });

    }catch(error){
     dispatch({
       type: "productCreateFail",
       payload: error.response.data.message
     });
    }
}

// get all products of shop //

export const getallProduct = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "getAllProductsShopRequest",
    });

    const response = await axios.get(
      `${server}/product/get-all-products-shop/${id}`
    );

    // Check if the response has a 'data' property
    if (response.data) {
      dispatch({
        type: "getAllProductsShopSuccess",
        payload: response.data.product,
      });
    } else {
      // Handle the case where 'response.data' is undefined or doesn't have the expected structure
      dispatch({
        type: "getAllProductsShopFail",
        payload: "Invalid response data",
      });
    }
  } catch (error) {
    dispatch({
      type: "getAllProductsShopFail",
      payload: error.response ? error.response.data.message : "Network error",
    });
  }
};
