import React from "react";
import { Title, Products, Members, WrapWithContainer } from "./components";
import IgnoreBasicHTML from "./components/ui/IgnoreBasicHTML";
import staticData from "./static_data";
import KannakkuProvider from "./components/context";
import "./css/container.css";
const title = staticData.TITLE;
const Container = ({ children }) => <div class="app-container">{children}</div>;

function App() {
  return (
    <div className="app center">
      <IgnoreBasicHTML>
        <KannakkuProvider>
          <WrapWithContainer wrapperCmp={Container}>
            <Title>{title}</Title>
            <Products />
            <Members />
          </WrapWithContainer>
        </KannakkuProvider>
      </IgnoreBasicHTML>
    </div>
  );
}

export default App;
