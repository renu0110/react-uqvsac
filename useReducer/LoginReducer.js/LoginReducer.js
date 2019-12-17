import { Login_User } from "../../action.types";

function LoginReducer(state, action) {
  switch (action.type) {
    case Login_User:
      return { isDoneAuthenticating: true };
    default:
      return state;
  }
}

export {LoginReducer}
