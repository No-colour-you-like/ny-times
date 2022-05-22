import axios from "axios";

const SET_NAVIGATION = "SET_NAVIGATION";

const INITIAL_STATE = {
  navigation: []
};

const navigationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_NAVIGATION:
      return {
        ...state,
        navigation: action.payload
      };
    default: {
      return state;
    }
  }
};

export const fetchNavigation = () => {
  return (dispatch) => {
    return axios.get("./data/data.json").then((resp) => {
      dispatch(setNavigation(resp.data.navigation));
    });
  };
};

export const setNavigation = (data) => {
  return {
    type: SET_NAVIGATION,
    payload: data
  };
};

export default navigationReducer;
