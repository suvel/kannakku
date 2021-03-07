/**
 * product data structure
     { var: "", name: "", val: 0 }
 */
import React, { useState, useReducer, useContext } from "react";
import AddProduct from "./modals/AddProduct";
import { kannakkuContext } from "./context";

import "../css/products.css";
const dummyProducts = [
  { id: 1, variable: "☕", name: "tea", val: 10 },
  { id: 2, variable: "🍪", name: "biscuit", val: 5 },
  { id: 3, variable: "🚬", name: "cigaret", val: 5 },
];
const Product = ({ id, variable: va, name: n, val: v }) => {
  return (
    <div id={id} class="product">
      <span class="p-var">{va}</span>
      <span class="p-name">{n}</span>
      <span class="p-val">{v}</span>
    </div>
  );
};
const AddProductBtn = ({ ...props }) => <div {...props} class="p-add" />;
const Products = () => {
  const { state, dispatch, kannakkuActions } = useContext(kannakkuContext);
  const productList = state.productList;
  const setProductList = (value) => {
    dispatch({ type: kannakkuActions.ADD_PRODUCTS, payload: value });
  };
  const [showAddProduct, setShowAddProduct] = useState(false);
  const showAddProductModal = () => setShowAddProduct(true);
  const handelAddProduct = (prdObj) => {
    setProductList(prdObj);
  };
  return (
    <>
      <div className="products">
        {productList.map(Product)}
        <AddProductBtn onClick={showAddProductModal} />
      </div>
      <AddProduct
        open={showAddProduct}
        toggle={setShowAddProduct}
        onAddProduct={handelAddProduct}
      />
    </>
  );
};

export default Products;
