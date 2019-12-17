import React, { createContext, useMemo, useReducer } from "react";
import { globalState } from "./initialState";
import { reducer } from "../useReducer";

const StoreContext = React.createContext;

function useStore() {
  const store = React.useContext(StoreContext);
  return store;
}

function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, globalState);
  const value = useMemo(() => ({ state, dispatch }), [state]);
  return <StoreContext.Provider value={value} {...props} />;
}

export { StoreProvider, useStore };
