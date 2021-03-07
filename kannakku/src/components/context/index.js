import React, { useReducer, createContext } from "react";
import reducer, { initializer, kannakkuActions } from "../reducer";
export const kannakkuContext = createContext(null);

const KannakkuProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initializer);
  return (
    <kannakkuContext.Provider value={{ state, dispatch, kannakkuActions }}>
      {children}
    </kannakkuContext.Provider>
  );
};

export default KannakkuProvider;
