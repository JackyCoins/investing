// Import libraries
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Import selectors and actions
import { getStocksSelector, getStocksAction } from "../../../redux/stocks";

// Import components
import TitleText from "../../Common/Text/TitleText";
import TableWithStocks from "./TableWithStocks";

class StocksPage extends Component {
  componentDidMount = () => {
    this.props.getStocksAction();
  };

  render = () => (
    <div>
      <TitleText type={2} color="title">Акции</TitleText>
      <TableWithStocks stocks={this.props.stocks}/>
    </div>
  );

  static propTypes = {
    stocks: PropTypes.array.isRequired,
    getStocksAction: PropTypes.func.isRequired
  };
}

export default connect(state => ({
  stocks: getStocksSelector(state)
}), { getStocksAction })(StocksPage);