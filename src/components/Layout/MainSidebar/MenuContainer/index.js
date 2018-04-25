// Import libraries
import React, { Component } from "react";

// Import components
import { Menu, Icon } from "antd";
import Link from "next/link";

class MenuContainer extends Component {
  render = () => (
    <Menu theme="dark">
      <Menu.Item key="projects">
        <Link href="investments">
          <div>
            <Icon type="appstore-o" />
            Инвестиции
          </div>
        </Link>
      </Menu.Item>
      <Menu.Item key="applications">
        <Link href="applications">
          <div>
            <Icon type="tag-o" />Заявки
          </div>
        </Link>
      </Menu.Item>
      <Menu.Item key="clients">
        <Link href="clients">
          <div>
            <Icon type="team" />Клиенты
          </div>
        </Link>
      </Menu.Item>
      <Menu.Divider />
    </Menu>
  );
}

export default MenuContainer;
