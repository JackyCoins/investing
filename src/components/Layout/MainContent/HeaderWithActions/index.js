// Import libraries
import React from "react";
import PropTypes from "prop-types";

// Import components
import TitleText from "../../../Common/Text/TitleText";

const headerWithActionsStyle = {
  display: "flex",
  justifyContent: "space-between"
};

const HeaderWithActions = props => (
  <div style={headerWithActionsStyle}>
    <TitleText type={2} color="title">
      {props.title}
    </TitleText>
    <div>{props.actions}</div>
  </div>
);

HeaderWithActions.propTypes = {
  title: PropTypes.string.isRequired,
  actions: PropTypes.array
};

export default HeaderWithActions;
