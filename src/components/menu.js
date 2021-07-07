import { Menu, Button } from "antd";
import React, { useState } from "react";
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
  OrderedListOutlined
} from "@ant-design/icons";
import { OmitProps } from "antd/lib/transfer/ListBody";

const { SubMenu } = Menu;
export const NavigationMenu = function (props) {
  const [collapsed, setCollapsed] = useState(false);
  function toggleCollapsed() {
    // calls the setCollapsed with a lambda function that operates on some current state
    setCollapsed((collapsed) => {
      return !collapsed;
    });
  }

  // Default dummy dict in case a prop was not specified
  const menu_data = props.menuData ?? [
    { key: 1, icon: PieChartOutlined, label: "Default Opt1", children: [] },
    { key: 2, icon: DesktopOutlined, label: "Default Opt2", children: [] },
    { key: 3, icon: ContainerOutlined, label: "Default Opt3", children: [] },
    {
      key: 4,
      icon: OrderedListOutlined,
      label: "Submenu",
      children: [
        {
          key: "s1",
          icon: ContainerOutlined,
          label: "Sub-Menu Level 1",
          children: [
            {
              key: "ss1",
              icon: DesktopOutlined,
              label: "Nested SubMenu Level 2",
              children: [],
            },
          ],
        },
      ],
    },
  ];

  function buildMenuJSX(menu_data) {
    // Generate recursively a menu
    const menu_list = [];
    menu_data.forEach((item) => {
      if (item.children.length == 0) {
        menu_list.push(
          <Menu.Item key={item.key} icon={<item.icon />}>
            {item.label}
          </Menu.Item>
        );
      } else {
        menu_list.push(
          <SubMenu key={item.key} icon={<item.icon />} title={item.label}>
            {buildMenuJSX(item.children)};
          </SubMenu>
        )
      }
    });

    return menu_list;
  }

  const menu_list = buildMenuJSX(menu_data);

  return (
    <div style={{ width: 256 }}>
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{ marginBottom: 16 }}
      >
        {collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
      </Button>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode={props.menuMode}
        theme={props.dark}
        inlineCollapsed={collapsed}
      >
        {menu_list}
      </Menu>
    </div>
  );
};
