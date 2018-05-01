// Import libraries
import React from "react";

// Import components
import { Layout } from "antd";
import Logo from "./Logo/index";
import MenuContainer from "./MenuContainer/index";

const siderStyle = {
  background: "#fff"
}

const logoWrapperStyle = {
  padding: "1rem .5rem"
};

const MainSidebar = () => (
  <Layout.Sider style={siderStyle}>
    <div style={logoWrapperStyle}>
      <Logo />
    </div>
    <MenuContainer />
  </Layout.Sider>
);

export default MainSidebar;
