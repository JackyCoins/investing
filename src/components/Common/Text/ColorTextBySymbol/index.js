// Import libraries
import React from "react";
import PropTypes from "prop-types";

const ColorTextBySymbol = props => {
  const number = +props.number;

  const colorStyle = {
    color: Math.sign(number) === 1 ? "green" : "red"
  };

  return <span style={colorStyle}>{props.number}</span>;
};

ColorTextBySymbol.propTypes = {
  number: PropTypes.number.isRequired
};

ColorTextBySymbol.defaultProps = {
  number: 0
};

export default ColorTextBySymbol;
