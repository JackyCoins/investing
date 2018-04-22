// Import libraries
import React from "react";

// Import styles
import { activeInteractiveColor } from "../../../../styles";

// Import components
import { Icon } from "antd";

const logoStyle = {
  display: "flex"
};

const iconWrapperStyle = {
  fontSize: "1.4rem",
  color: activeInteractiveColor,
  marginRight: ".5rem",
  padding: "0 .5rem 0",
  display: "flex",
  alignItems: "center",
  borderRight: "1px solid #fff"
};

const titleStyle = {
  fontSize: ".9rem",
  color: "#fff",
  lineHeight: "1.2rem"
};

const Logo = () => (
  <section style={logoStyle}>
    <div style={iconWrapperStyle}>
      <Icon type="dashboard" />
    </div>
    <div style={titleStyle}>Административная панель</div>
  </section>
);

export default Logo;