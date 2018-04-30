// Import libraries
import React from "react";

// Import components
import TitleText from "../../Common/Text/TitleText";
import TableWithClients from "./TableWithClients";

const ListOfClientsPage = () => (
  <div>
    <TitleText type={2} color="title">Список клиентов</TitleText>
    <TableWithClients />
  </div>
);

export default ListOfClientsPage;