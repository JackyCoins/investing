// Import libraries
import React from "react";
import PropTypes from "prop-types";
import { Table, Avatar } from "antd";

// Import components
import ColorTextBySymbol from "../../../Common/Text/ColorTextBySymbol";
import PriceText from "../../../Common/Text/PriceText";
import ElementWrapper from "../../../Common/ElementWrapper";

const avatarColumnStyle = {
  marginRight: ".5em",
  display: "inline-block"
};

const columns = [
  {
    title: "ID клиента",
    dataIndex: "clientId",
    key: "clientId",
    render: text => (
      <div>
        {text}
      </div>
    )
  },
  {
    title: "IDs акций",
    dataIndex: "stockIds",
    key: "stockIds",
    render: text => <div>{text}</div>
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