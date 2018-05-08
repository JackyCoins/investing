// Import libraries
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose, lifecycle, withStateHandlers } from "recompose";
import { Button } from "antd";

// Import selectors and actions
import {
  getClientsWithCitiesSelector,
  getClientsAction,
  createClientAction
} from "../../../redux/clients";
import { getCitiesSelector } from "../../../redux/cities";

// Import components
import TableWithClients from "./TableWithClients";
import HeaderWithActions from "../../Layout/MainContent/HeaderWithActions";
import FormOfCreateClient from "./FormOfCreateClient";

const ListOfClientsPage = props =>
  props.activeCreateMode ? (
    <div>
      <HeaderWithActions
        title="Создание клиента"
        actions={[
          <Button key="add" type="primary" onClick={props.hideCreateMode}>
            Перейти к списку
          </Button>
        ]}
      />
      <FormOfCreateClient
        cities={props.cities}
        createClientAction={props.createClientAction}
      />
    </div>
  ) : (
    <div>
      <HeaderWithActions
        title="Клиенты"
        actions={[
          <Button key="add" type="primary" onClick={props.showCreateMode}>
            Добавить клиента
          </Button>
        ]}
      />
      <TableWithClients clients={props.clients} cities={props.cities} />
    </div>
  );

ListOfClientsPage.propTypes = {
  clients: PropTypes.array.isRequired,
  cities: PropTypes.array.isRequired,
  activeCreateMode: PropTypes.bool.isRequired,
  showCreateMode: PropTypes.func.isRequired,
  createClientAction: PropTypes.func.isRequired,
  hideCreateMode: PropTypes.func.isRequired
};

export default compose(
  connect(
    state => ({
      clients: getClientsWithCitiesSelector(state),
      cities: getCitiesSelector(state)
    }),
    { getClientsAction, createClientAction }
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
      this.props.getClientsAction();
    }
  })
)(ListOfClientsPage);
