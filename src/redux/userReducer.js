import { getUser } from "../utils";
import { LOGIN, LOGOUT } from "./types";

const initialState = {
  isAuth: getUser() === null ? false : true,
  userData: {}
}

function userReducer(state=initialState, {type}){
  switch(type){
    case LOGIN: {
      return {
        ...state,
        isAuth: true
      };
    } case LOGOUT: {
      return {
        ...state,
        isAuth: false
      };
    } default: {
      return state;
    }
  }
}

export default userReducer;