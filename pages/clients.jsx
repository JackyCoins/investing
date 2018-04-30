// Import libraries
import React from "react";

// Import components
import MainLayout from "../src/components/Layout/MainLayout";
import ContentHeader from "../src/components/Layout/ContentHeader";
import ContentTabs from "../src/components/Layout/ContentTabs";
import PreviewOfClientsPage from "../src/components/Clients/PreviewOfClientsPage";
import ListOfClientsPage from "../src/components/Clients/ListOfClientsPage";

const tabs = [{
  title: "Обзор",
  name: "preview",
  link: "",
  component: PreviewOfClientsPage
}, {
  title: "Список",
  name: "listOfClients",
  link: "listOfClients",
  component: ListOfClientsPage
}];


const ClientsPage = () => (
  <MainLayout>
    <ContentHeader title="Клиенты"/>
    <ContentTabs tabs={tabs}/>
  </MainLayout>
)

export default ClientsPage;