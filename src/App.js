import React, { useEffect, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Layout } from "antd";
import "antd/dist/antd.css";

import "./App.css";
import "./index.css";
import About from "./pages/about";
import Home from "./pages/home";
import Topics from "./pages/topics";

import { MyFooter, MyBreadcrumb, MyMenu } from "./components/layout";
import { navigation, site } from "./configs/config";

const { Header, Content } = Layout;

function App() {
  // set the site title
  useEffect(() => {
    document.title = `${site.title} - ${site.tagline}`;
  }, []);


  // setsup the router

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
                <Suspense fallback={<div>Loading...</div>}>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/topics">
                  <Topics />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
                </Suspense>
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