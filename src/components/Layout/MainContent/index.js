// Import libraries
import React from "react";
import PropTypes from "prop-types";

// Import components
import { Layout } from "antd";

const mainContentStyle = {
  padding: "1rem",
  background: "#fff",
  height: "100vh"
};

const MainContent = props => (
  <Layout.Content>
    <main style={mainContentStyle}>{props.children}</main>
  </Layout.Content>
);

MainContent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.element,
    PropTypes.array
  ])
};

export default MainContent;
