// Import libraries
import React from "react";

// Import components
import TitleText from "../../Common/Text/TitleText";
import TableWithStocks from "./TableWithStocks";

const StocksPage = () => (
  <div>
    <TitleText type={2} color="title">Акции</TitleText>
    <TableWithStocks />
  </div>
);

export default StocksPage;