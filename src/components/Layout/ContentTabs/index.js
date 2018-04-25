// Import libraries
import React from "react";
import PropTypes from "prop-types";

// Import components
import { Tabs } from "antd";

const TabPane = Tabs.TabPane;

const ContentTabs = props => {
  const tabs =
    props.tabs && props.tabs.length
      ? props.tabs.map(tab => {
          const ComponentInTab = tab.component || null;

          return ComponentInTab ? (
            <TabPane tab={tab.title} key={tab.name}>
              <ComponentInTab />
            </TabPane>
          ) : null;
        })
      : null;

  return tabs ? (
    <section>
      <Tabs defaultActiveKey="1">{tabs}</Tabs>
    </section>
  ) : null;
};

ContentTabs.propTypes = {
  tabs: PropTypes.array.isRequired
};

ContentTabs.defaultProps = {
  tabs: []
};

export default ContentTabs;
