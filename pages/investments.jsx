// Import libraries
import React from "react";

// Import components
import MainLayout from "../src/components/Layout/MainLayout";
import ContentHeader from "../src/components/Layout/ContentHeader";
import ContentTabs from "../src/components/Layout/ContentTabs";
import PreviewOfInvestmentsPage from "../src/components/Investments/PreviewOfInvestmentsPage";
import StocksPage from "../src/components/Investments/StocksPage";

const tabs = [{
  title: "Обзор",
  name: "preview",
  link: "",
  component: PreviewOfInvestmentsPage
}, {
  title: "Акции",
  name: "stocks",
  link: "stocks",
  component: StocksPage
}];

const InvestmentsPage = () => (
  <MainLayout>
    <ContentHeader title="Инвестиции"/>
    <ContentTabs tabs={tabs}/>
  </MainLayout>
)

export default InvestmentsPage;