import { Layout, Breadcrumb, Menu } from "antd";
import { Link } from "react-router-dom";
import { DesktopOutlined } from "@ant-design/icons";
const { Footer } = Layout;

function MyFooter() {
  return (
    <Footer style={{ textAlign: "center" }}>
      Ant Design ©2018 Created by Ant UED
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
          <Menu.Item key={key} icon={<DesktopOutlined />}>
            <Link to={navigation[index % len]} />
            {navigation[index % len] == "/" ? "Home" : navigation[index % len]}
          </Menu.Item>
        );
      })}
    </Menu>
  );
}

export { MyFooter, MyBreadcrumb, MyMenu };
