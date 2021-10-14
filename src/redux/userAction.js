import { LOGIN, LOGOUT } from "./types";

export function loginAction(){
  return {type: LOGIN};
}
export function logoutAction(){
  return {type: LOGOUT};
}