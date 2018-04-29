// Import libraries
import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";

// Import store
import store from "../../../redux/store";

// Import styles
import styles from "antd/dist/antd.css";

// Import components
import { Layout } from "antd";
import MainSidebar from "../MainSidebar/index";
import MainContent from "../MainContent/index";

const layoutStyle = {
  height: "100vh",
  width: "100vw"
};

const MainLayout = props => (
  <Provider store={store}>
    <main style={layoutStyle}>
      <Layout hasSider style={layoutStyle}>
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <MainSidebar />
        <MainContent>
          {props.children}
        </MainContent>
      </Layout>
    </main>
  </Provider>
);

MainLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.element,
    PropTypes.array
  ])
};

export default MainLayout;
