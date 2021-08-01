import { Layout, Breadcrumb, Menu, Avatar } from "antd";
import AuthContext from "../context/AuthContext";
import { useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import { DesktopOutlined, UserOutlined } from "@ant-design/icons";
const { Footer } = Layout;

function MyFooter(props) {
  return (
    <Footer style={{ textAlign: "center" }}>
      Ant Design ©2018 Created by Ant UED - env: {props.env}
    </Footer>
  );
}

function MyBreadcrumb() {
  return (
    <Breadcrumb style={{ margin: "16px 0" }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>List</Breadcrumb.Item>
      <Breadcrumb.Item>App</Breadcrumb.Item>
    </Breadcrumb>
  );
}

function MyMenu(props) {
  const navigation = props.navigation;
  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
      {new Array(navigation.length).fill(null).map((_, index) => {
        const len = navigation.length;
        const key = index + 1;
        return (
          <Menu.Item key={key} icon={navigation[index % len].icon ?? <DesktopOutlined />}>
            <Link to={navigation[index % len].link} />
            {navigation[index % len].label}
          </Menu.Item>
        );
      })}
    </Menu>
  );
}

function MyUser(props) {
  const { user } = useContext(AuthContext);
  return (<div><Avatar
    size={{
      xs: 24,
      sm: 32,
      md: 40,
    }}
    icon={<UserOutlined />}
  />
    {user?.displayName ?? "Guest"}
  </div>
  );
}
export { MyFooter, MyBreadcrumb, MyMenu, MyUser };