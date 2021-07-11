import React, { useEffect, Suspense, useContext } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Layout } from "antd";
import "antd/dist/antd.css";

import { AuthContext } from "./context/AuthContext";

import "./App.css";
import "./index.css";
import About from "./pages/about";
import Home from "./pages/home";
import Topics from "./pages/topics";
import Login from "./pages/login";

import { MyFooter, MyBreadcrumb, MyMenu } from "./components/layout";
import { navigation, site } from "./configs/config";

const { Header, Content } = Layout;

function App() {

  // Get the user
  const user = useContext(AuthContext);

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
            <MyMenu navigation={navigation} user={user}/>
          </Header>
          <Content style={{ padding: "0 50px" }}>
            <MyBreadcrumb />
            <div className="site-layout-content">
              <Switch>
                <Suspense fallback={<div>Loading...</div>}>
                  <Route path='/login' component={Login}></Route>
                  <Route path="/about" component={About}> </Route>
                  <Route path="/topics" component={Topics}> </Route>
                  <Route path="/" exact component={Home}> </Route>
                </Suspense>
              </Switch>
            </div>
          </Content>
          <MyFooter env={site.env} />
        </Layout>
      </div>
    </Router>
  );
}
export default App;