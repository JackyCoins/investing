// Import libraries
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Table } from "antd";

// Import selectors and actions
import { getClientsSelector } from "../../../../redux/clients";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    render: text => <div>{text}</div>
  },
  {
    title: "Фамилия",
    dataIndex: "lastName",
    key: "lastName",
    render: text => <div>{text}</div>
  },
  {
    title: "Имя",
    dataIndex: "firstName",
    key: "firstName",
    render: text => <div>{text}</div>
  }
];

const TableWithClients = props => (
  <Table
    rowKey={record => record.id}
    dataSource={props.clients}
    columns={columns}
  />
);

TableWithClients.propTypes = {
  clients: PropTypes.array.isRequired
};

export default connect(state => ({
  clients: getClientsSelector(state)
}))(TableWithClients);
