import { Login_User } from "../../action-types";

const loadUserRole = (dispatch, user) => {
  return dispatch({ type: "Login_User", user });
};

export { loadUserRole };
