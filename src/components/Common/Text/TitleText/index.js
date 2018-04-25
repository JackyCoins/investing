// Import libraries
import React from "react";
import PropTypes from "prop-types";

const getHeaderByType = (type, text, style) => {
  let element = null;

  switch (type) {
    case 1: {
      element = <h1 style={style}>{text}</h1>;
      break;
    }
    case 2: {
      element = <h2 style={style}>{text}</h2>;
      break;
    }
    case 3: {
      element = <h3 style={style}>{text}</h3>;
      break;
    }
    case 4: {
      element = <h4 style={style}>{text}</h4>;
      break;
    }
  }

  return element;
};

const getTitleTextStyle = props => {
  let color = null;

  switch (props.color) {
    case "title": {
      color = "#000";
      break;
    }
    case "subtitle": {
      color = "#999";
      break;
    }
  }

  return {
    color
  };
};

const TitleText = props =>
  getHeaderByType(props.type, props.children, getTitleTextStyle(props));

TitleText.propTypes = {
  type: PropTypes.number.isRequired,
  color: PropTypes.oneOf(["title", "subtitle"]),
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array
  ])
};

TitleText.defaultProps = {
  type: 2,
  children: ""
};

export default TitleText;
