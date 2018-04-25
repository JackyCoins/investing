// Import libraries
import React from "react";
import PropTypes from "prop-types";

// Import styles
import { brightBlueColor } from "../../../styles";

const titleStyle = {
  display: "inline-block",
  borderBottom: `1px solid ${brightBlueColor}`,
  paddingRight: "1rem",
  fontSize: "1.5rem",
  marginBottom: "1rem"
};

const ContentHeader = props => (
  <header>
    <div style={titleStyle}>
      {props.title}
    </div>
  </header>
);

ContentHeader.propTypes = {
  title: PropTypes.string.isRequired
};

ContentHeader.defaultProps = {
  title: "Заголовок"
};

export default ContentHeader;