// Import libraries
import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Button } from "antd";
import { compose, lifecycle, withStateHandlers } from "recompose";

// Import selectors and actions
import {
  getApplicationsWithFullDataSelector,
  getApplicationsAction,
  createApplicationAction
} from "../../../redux/applications";
import { getClientsAction, getClientsSelector } from "../../../redux/clients";
import { getStocksAction, getStocksSelector } from "../../../redux/stocks";

// Import components
import HeaderWithActions from "../../Layout/MainContent/HeaderWithActions";
import TableWithApplications from "./TableWithApplications";
import FormOfCreateApplication from "./FormOfCreateApplication";

const ListOfApplicationsPage = props =>
  props.activeCreateMode ? (
    <div>
      <HeaderWithActions
        title="Создание заявки"
        actions={[
          <Button key="add" type="primary" onClick={props.hideCreateMode}>
            Перейти к списку
          </Button>
        ]}
      />
      <FormOfCreateApplication
        createApplicationAction={props.createApplicationAction}
        clients={props.clients}
        stocks={props.stocks}
      />
    </div>
  ) : (
    <div>
      <HeaderWithActions
        title="Заявки"
        actions={[
          <Button key="add" type="primary" onClick={props.showCreateMode}>
            Создать заявку
          </Button>
        ]}
      />
      <TableWithApplications applications={props.applications} />
    </div>
  );

ListOfApplicationsPage.propTypes = {
  applications: PropTypes.array.isRequired,
  getApplicationsAction: PropTypes.func.isRequired,
  activeCreateMode: PropTypes.bool.isRequired,
  showCreateMode: PropTypes.func.isRequired,
  hideCreateMode: PropTypes.func.isRequired,
  createApplicationAction: PropTypes.func.isRequired,
  getClientsAction: PropTypes.func.isRequired,
  clients: PropTypes.array.isRequired,
  getStocksAction: PropTypes.func.isRequired,
  stocks: PropTypes.array.isRequired
};

export default compose(
  connect(
    state => ({
      applications: getApplicationsWithFullDataSelector(state),
      clients: getClientsSelector(state),
      stocks: getStocksSelector(state)
    }),
    {
      getApplicationsAction,
      createApplicationAction,
      getClientsAction,
      getStocksAction
    }
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
      this.props.getApplicationsAction();
      this.props.getClientsAction();
      this.props.getStocksAction();
    }
  })
)(ListOfApplicationsPage);
