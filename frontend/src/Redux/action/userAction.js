import {
    ADD_USER_DETAILS,
    REMOVE_USER_DETAILS_LOGOUT,
  } from "../action/actiontypes";
  
  export const addUserDetails = (userDetails) => (dispatch) => {
    dispatch({
      type: ADD_USER_DETAILS,
      payload: userDetails,
    });
  };
  
  export const logoutResetDetails = () => (dispatch) => {
    dispatch({
      type: REMOVE_USER_DETAILS_LOGOUT,
    });
  };
  
  