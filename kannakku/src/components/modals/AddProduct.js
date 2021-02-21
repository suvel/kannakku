import React, { useState, useEffect } from "react";
import Modal from "../ui/Modal";
import WrapWithContainer from "../common/WrapWithContainer";
import "./addproducts.css";
const FormContainer = ({ children }) => (
  <div class="form-container">{children}</div>
);
const VariableIp = (props) => (
  <input className="var-ip" type="text" placeholder={"🍪"} {...props} />
);
const NameIp = (props) => (
  <input className="name-ip" type="text" placeholder={"cookie"} {...props} />
);
const ValIp = (props) => (
  <>
    <span>₹</span>
    <input className="val-ip" type="number" placeholder={0} {...props} />
  </>
);
const AddProduct = ({ open: modState, toggle: setModState, onAddProduct }) => {
  const [variable, setVariable] = useState("");
  const [name, setName] = useState("");
  const [val, setVal] = useState(0);
  useEffect(() => {
    console.log({variable, name, val});
  }, [variable, name, val]);
  const handelCancel = () => setModState(false);
  const btnArr = [{ symb: "cancel", color: "red", clickFn: handelCancel }];
  return (
    <>
      <Modal open={modState} buttons={btnArr || []}>
        <div className="container">
          <WrapWithContainer wrapperCmp={FormContainer}>
            <VariableIp
              value={variable}
              onChange={(e) => setVariable(e.target.value)}
            />
            <div className="name-n-val">
              <NameIp value={name} onChange={(e) => setName(e.target.value)} />
              <ValIp value={val} onChange={(e) => setVal(e.target.value)} />
            </div>
            <div className="sub-con">
              <button
                className="sub-btn"
                onClick={() => onAddProduct({ variable, name, val })}
              >
                sumbit
              </button>
            </div>
          </WrapWithContainer>
        </div>
      </Modal>
    </>
  );
};

export default AddProduct;
