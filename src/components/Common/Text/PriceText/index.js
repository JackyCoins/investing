// Import libraries
import React from "react";
import PropTypes from "prop-types";

const PriceText = props => {
  let currency = null;

  switch (props.currency) {
    case "RUB": {
      currency = <span>&#8381;</span>;
      break;
    }
    case "USD": {
      currency = <span>&#36;</span>;
      break;
    }
  }

  return <span>{props.value} {currency}</span>;
};

PriceText.propTypes = {
  value: PropTypes.number.isRequired,
  currency: PropTypes.string
};

export default PriceText;