// Import libraries
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose, lifecycle } from "recompose";

// Import components
import { Menu, Icon } from "antd";
import Link from "next/link";

// Import selectors or actions
import {
  getMenuItems,
  getNameOfActiveMenuItem,
  toggleMenuItem
} from "../../../../redux/menu";

const menuStyle = {
  borderRight: 0
}

const MenuContainer = props => {
  const menuItems = props.menuItems.map(menuItem => (
    <Menu.Item key={menuItem.name}>
      <Link href={menuItem.path}>
        <div>
          <Icon type={menuItem.icon} />
          {menuItem.title}
        </div>
      </Link>
    </Menu.Item>
  ));

  const clickHandler = item => {
    props.toggleMenuItem(item.key);
  };

  return (
    <Menu
      selectedKeys={[props.nameOfActiveMenuItem]}
      onClick={clickHandler}
      style={menuStyle}
    >
      {menuItems}
      <Menu.Divider />
    </Menu>
  );
};

MenuContainer.propTypes = {
  menuItems: PropTypes.array.isRequired,
  nameOfActiveMenuItem: PropTypes.string.isRequired,
  toggleMenuItem: PropTypes.func.isRequired
};

export default compose(
  connect(
    state => ({
      menuItems: getMenuItems(state),
      nameOfActiveMenuItem: getNameOfActiveMenuItem(state)
    }),
    {
      toggleMenuItem
    }
  ),
  lifecycle({
    componentDidMount() {
      const currentSection = window.location.pathname.split("/")[1];

      if (currentSection) {
        this.props.toggleMenuItem(currentSection);
      }
    }
  })
)(MenuContainer);
