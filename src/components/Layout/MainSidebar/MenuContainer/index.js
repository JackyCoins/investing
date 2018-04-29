// Import libraries
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// Import components
import { Menu, Icon } from "antd";
import Link from "next/link";

// Import selectors or actions
import {
  getMenuItems,
  getNameOfActiveMenuItem,
  toggleMenuItem
} from "../../../../redux/menu";

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
      theme="dark"
      selectedKeys={[props.nameOfActiveMenuItem]}
      onClick={clickHandler}
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

export default connect(
  state => ({
    menuItems: getMenuItems(state),
    nameOfActiveMenuItem: getNameOfActiveMenuItem(state)
  }),
  {
    toggleMenuItem
  }
)(MenuContainer);