// Import libraries
import React from "react";

// Import styles
import { brightBlueColor } from "../../../../styles";

// Import components
import { Icon } from "antd";

const logoStyle = {
  display: "flex"
};

const iconWrapperStyle = {
  fontSize: "1.4rem",
  color: brightBlueColor,
  marginRight: ".5rem",
  padding: "0 .5rem 0",
  display: "flex",
  alignItems: "center",
  borderRight: "1px solid #999"
};

const titleStyle = {
  fontSize: "1.2rem",
  color: "#999",
  fontWeight: "100",
  fontFamily: "monospace"
};

const Logo = () => (
  <section style={logoStyle}>
    <div style={iconWrapperStyle}>
      <Icon type="dashboard" />
    </div>
    <div style={titleStyle}>INVEST</div>
  </section>
);

export default Logo;