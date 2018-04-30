// Import libraries
import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Button } from "antd";
import { compose, lifecycle, withStateHandlers } from "recompose";

// Import selectors and actions
import { getStocksSelector, getStocksAction } from "../../../redux/stocks";

// Import components
import HeaderWithActions from "../../Layout/MainContent/HeaderWithActions";
import TableWithStocks from "./TableWithStocks";
import FormOfCreateStock from "./FormOfCreateStock";

const StocksPage = props =>
  props.activeCreateMode ? (
    <div>
      <HeaderWithActions
        title="Добавление акции"
        actions={[
          <Button key="add" type="primary" onClick={props.hideCreateMode}>
            Перейти к списку
          </Button>
        ]}
      />
      <FormOfCreateStock />
    </div>
  ) : (
    <div>
      <HeaderWithActions
        title="Акции"
        actions={[
          <Button key="add" type="primary" onClick={props.showCreateMode}>
            Добавить акцию
          </Button>
        ]}
      />
      <TableWithStocks stocks={props.stocks} />
    </div>
  );

StocksPage.propTypes = {
  stocks: PropTypes.array.isRequired,
  getStocksAction: PropTypes.func.isRequired,
  activeCreateMode: PropTypes.bool.isRequired,
  showCreateMode: PropTypes.func.isRequired,
  hideCreateMode: PropTypes.func.isRequired
};

export default compose(
  connect(
    state => ({
      stocks: getStocksSelector(state)
    }),
    { getStocksAction }
  ),
  withStateHandlers(
    {
      activeCreateMode: false
    },
    {
      showCreateMode: () => () => ({ activeCreateMode: true }),
      hideCreateMode: () => () => ({ activeCreateMode: false })
    }
  ),
  lifecycle({
    componentDidMount() {
      this.props.getStocksAction();
    }
  })
)(StocksPage);
