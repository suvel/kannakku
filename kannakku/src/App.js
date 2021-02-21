import React from "react";
import { Title, Products, Members, WrapWithContainer } from "./components";
import IgnoreBasicHTML from "./components/ui/IgnoreBasicHTML";
import staticData from "./static_data";
import "./css/container.css";
const title = staticData.TITLE;
const Container = ({ children }) => <div class="app-container">{children}</div>;
function App() {
  return (
    <div className="app center">
      <IgnoreBasicHTML>
        <WrapWithContainer wrapperCmp={Container}>
          <Title>{title}</Title>
          <Products />
          <Members />
        </WrapWithContainer>
      </IgnoreBasicHTML>
    </div>
  );
}

export default App;
