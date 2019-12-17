import {LoginReducer} from "../LoginReducer"

function reducer(state,action){
  return {
    authentication : LoginandReducer(state.authentication, action)
  }
}

export {reducer}