// Import libraries
import React from "react";
import PropTypes from "prop-types";

// Import components
import { Layout } from "antd";

const MainContent = props => (
  <Layout.Content>{props.children}</Layout.Content>
)

MainContent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.element,
    PropTypes.array
  ])
}

export default MainContent;