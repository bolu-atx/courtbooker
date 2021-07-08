import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

import About from './pages/about';
import Home from './pages/home';
import Topics from './pages/topics';

import { DesktopOutlined } from "@ant-design/icons";
import { Layout, Menu, Breadcrumb } from "antd";

const { Header, Content, Footer } = Layout;
const navigation = [ "/","About", "Topics", "Extra","Download"];
function App() {
  return (
    <Router>
      <div className="App">
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
              {new Array(navigation.length).fill(null).map((_, index) => {
                const len = navigation.length;
                const key = index + 1;
                return (
                  <Menu.Item
                    key={key}
                    icon={<DesktopOutlined />}
                  >
                    <Link to={navigation[index % len]} />
                    {navigation[index % len] == '/'? 'Home' : navigation[index % len]}
                    </Menu.Item>
                );
              })}
            </Menu>
          </Header>
          <Content style={{ padding: "0 50px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content">
              <Switch>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/topics">
                  <Topics />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
                <Route></Route>
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </div>
    </Router>
  );
}
export default App;
