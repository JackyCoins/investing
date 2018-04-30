// Import libraries
import React from "react";
import PropTypes from "prop-types";
import { Table, Avatar } from "antd";

// Import components
import ColorTextBySymbol from "../../../Common/Text/ColorTextBySymbol";
import PriceText from "../../../Common/Text/PriceText";

const avatarColumnStyle = {
  marginRight: ".5em",
  display: "inline-block"
};

const columns = [
  {
    title: "Название",
    dataIndex: "title",
    key: "title",
    render: (text, record) => (
      <div>
        <div style={avatarColumnStyle}>
          <Avatar src={`assets/logos/${record.logo}`} />
        </div>
        {text}
      </div>
    )
  },
  {
    title: "Доходность за 6 мес",
    dataIndex: "lucrativenessPerSixMonths",
    key: "lucrativenessPerSixMonths",
    render: text => <ColorTextBySymbol number={text} />
  },
  {
    title: "Изменение за день",
    dataIndex: "earnings",
    key: "earnings",
    render: text => <ColorTextBySymbol number={text} />
  },
  {
    title: "Цена",
    dataIndex: "price",
    key: "price",
    render: price =>
      price ? <PriceText value={price.value} currency={price.currency} /> : null
  }
];

const TableWithStocks = props => (
  <Table
    rowKey={record => record.id}
    dataSource={props.stocks}
    columns={columns}
  />
);

TableWithStocks.propTypes = {
  stocks: PropTypes.array.isRequired
};

export default TableWithStocks;
