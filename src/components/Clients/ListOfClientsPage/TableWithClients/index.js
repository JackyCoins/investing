// Import libraries
import React from "react";
import PropTypes from "prop-types";
import { Table } from "antd";
import moment from "moment";

// Import components
import ElementWrapper from "../../../Common/ElementWrapper";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    render: id => <div>{id}</div>
  },
  {
    title: "Фамилия",
    dataIndex: "lastname",
    key: "lastname",
    render: lastname => <div>{lastname}</div>
  },
  {
    title: "Имя",
    dataIndex: "firstname",
    key: "firstname",
    render: firstname => <div>{firstname}</div>
  },
  {
    title: "Отчество",
    dataIndex: "middlename",
    key: "middlename",
    render: middlename => <div>{middlename}</div>
  },
  {
    title: "Дата рождения",
    dataIndex: "birthday",
    key: "birthday",
    render: date => <div>{moment(date).format("LL")}</div>
  },
  {
    title: "Город",
    dataIndex: "city",
    key: "city",
    render: city => <div>{city.title}</div>
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
