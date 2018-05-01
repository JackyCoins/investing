// Import libraries
import React from "react";
import PropTypes from "prop-types";

// Import styles
import {
  backgroundDefaultElementColor,
  paddingElementSize,
  borderRadiusElementSize
} from "../../../styles";

const elementWrapperStyle = {
  background: backgroundDefaultElementColor,
  padding: `${paddingElementSize}px`,
  borderRadius: `${borderRadiusElementSize}px`,
  display: "inline-block"
};

const ElementWrapper = props => (
  <div style={elementWrapperStyle}>{props.children}</div>
);

ElementWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired
};

export default ElementWrapper;
