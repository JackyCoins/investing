// Import libraries
import React from "react";

// Import styles
import styles from 'antd/dist/antd.css';

// Import components
import Header from "../Header";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const Layout = props => (
  <div style={layoutStyle}>
    <style dangerouslySetInnerHTML={{ __html: styles}} />
    <Header />
    {props.children}
  </div>
);

export default Layout;