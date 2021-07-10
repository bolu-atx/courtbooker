import React, { useEffect } from "react";
import "antd/dist/antd.css";
import "./App.css";
import "./index.css";
import { navigation, site } from "./content/config";

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import About from "./pages/about";
import Home from "./pages/home";
import Topics from "./pages/topics";

import { Layout } from "antd";
import { MyFooter, MyBreadcrumb, MyMenu } from "./components/layout";

const { Header, Content } = Layout;

function App() {
  // set the site title
  useEffect(() => {
    document.title = `${site.title} - ${site.tagline}`;
  }, []);

  return (
    <Router>
      <div className="App">
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <MyMenu navigation={navigation}/>
          </Header>
          <Content style={{ padding: "0 50px" }}>
            <MyBreadcrumb />
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
          <MyFooter />
        </Layout>
      </div>
    </Router>
  );
}
export default App;
