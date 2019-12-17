import {LoginandReducer} from "./LoginandReducer"

function reducer(state,action){
  return {
    authentication : LoginandReducer(state.authentication, action)
  }
}