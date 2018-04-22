// Import libraries
import React from "react";

// Import components
import { Layout } from "antd";
import Logo from "./Logo/index";
import MenuContainer from "./MenuContainer/index";

const logoWrapperStyle = {
  padding: "1rem .5rem"
};

const MainSidebar = () => (
  <Layout.Sider>
    <div style={logoWrapperStyle}>
      <Logo />
    </div>
    <MenuContainer />
  </Layout.Sider>
);

export default MainSidebar;
