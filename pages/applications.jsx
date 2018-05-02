// Import libraries
import React from "react";

// Import components
import MainLayout from "../src/components/Layout/MainLayout";
import ContentHeader from "../src/components/Layout/ContentHeader";
import ContentTabs from "../src/components/Layout/ContentTabs";
import PreviewOfApplicationsPage from "../src/components/Applications/PreviewOfApplicationsPage";
import ListOfApplicationsPage from "../src/components/Applications/ListOfApplicationsPage";

const tabs = [{
  title: "Обзор",
  name: "preview",
  link: "",
  component: PreviewOfApplicationsPage
}, {
  title: "Список",
  name: "list",
  link: "list",
  component: ListOfApplicationsPage
}];

const ApplicationsPage = () => (
  <MainLayout>
    <ContentHeader title="Заявки" />
    <ContentTabs tabs={tabs} />
  </MainLayout>
)

export default ApplicationsPage;