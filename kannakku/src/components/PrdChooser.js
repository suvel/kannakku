import React, { useContext } from "react";
import { kannakkuContext } from "./context";

const PrdChooser = ({ onSelect }) => {
  const { state } = useContext(kannakkuContext);
  return (
    <select>
      <option selected>choose...</option>
      {state.productList.map((prd) => (
        <option>{prd.variable}</option>
      ))}
    </select>
  );
};

export default PrdChooser;
