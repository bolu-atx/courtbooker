import logo from './logo.svg';
import { Button } from 'antd';
import './App.css';

import {NavigationBar, Demo}  from './components/layout';
import { LoadingOutlined } from '@ant-design/icons';
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

function App() {
  return (
    <div className="App">
        <NavigationBar name="Uber" />
        <Demo />
    </div>
  );
}

export default App;
