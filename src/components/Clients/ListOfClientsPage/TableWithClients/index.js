// Import libraries
import React from "react";
import PropTypes from "prop-types";
import { Table } from "antd";

// Import components
import ElementWrapper from "../../../Common/ElementWrapper";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    render: text => <div>{text}</div>
  },
  {
    title: "Фамилия",
    dataIndex: "lastname",
    key: "lastname",
    render: text => <div>{text}</div>
  },
  {
    title: "Имя",
    dataIndex: "firstname",
    key: "firstname",
    render: text => <div>{text}</div>
  }
];

const TableWithClients = props => (
  <ElementWrapper>
    <Table
      rowKey={record => record.id}
      dataSource={props.clients}
      columns={columns}
    />
  </ElementWrapper>
);

TableWithClients.propTypes = {
  clients: PropTypes.array.isRequired
};

export default TableWithClients
