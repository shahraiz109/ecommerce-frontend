import axios from "axios";
import { server } from "../../server";

//  create event//

// import axios from "axios"
// import { MdErrorOutline } from "react-icons/md"

export const createevent = (newForm) => async (dispatch) => {
  try {
    dispatch({
      type: "eventCreateRequest",
    });

    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.post(
      `${server}/event/create-event`,
      newForm,
      config
    );
    dispatch({
      type: "eventCreateSuccess",
      payload: data.event,
    });
  } catch (error) {
    dispatch({
      type: "eventCreateFail",
      payload: error.response.data.message,
    });
  }
};

// get all events of shop //

// export const getallevent = (id) => async (dispatch) => {
//   try {
//     dispatch({
//       type: "getAllEventShopRequest",
//     });

//     const { data } = await axios.get(
//       `${server}/event/get-all-events-shop/${id}`
//     );

//     dispatch({
//       type: "getAllEventShopSuccess",
//       payload: data.event,
//     });
//   } catch (error) {
//     dispatch({
//       type: "getAlleventsShopFail",
//       payload: error.response.data.message,
//     });
//   }
// };
