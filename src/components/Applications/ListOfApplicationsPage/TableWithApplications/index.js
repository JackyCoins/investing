// Import libraries
import React from "react";
import PropTypes from "prop-types";
import { Table, Avatar } from "antd";

// Import components
import ElementWrapper from "../../../Common/ElementWrapper";

const avatarColumnStyle = {
  marginRight: ".5em",
  display: "inline-block"
};

const columns = [
  {
    title: "ID заявки",
    dataIndex: "id",
    key: "id",
    render: id => (
      <div>{id}</div>
    )
  },
  {
    title: "Клиент",
    dataIndex: "client",
    key: "client",
    render: client =>
      client ? <div>{`${client.firstname} ${client.lastname}`}</div> : null
  },
  {
    title: "Акции",
    dataIndex: "stocks",
    key: "stocks",
    render: stocks =>
      stocks.map(stock => (stock ? <div>{stock.title}</div> : null))
  }
];

const TableWithApplications = props => (
  <ElementWrapper>
    <Table
      rowKey={record => record.id}
      dataSource={props.applications}
      columns={columns}
    />
  </ElementWrapper>
);

TableWithApplications.propTypes = {
  applications: PropTypes.array.isRequired
};

export default TableWithApplications;
