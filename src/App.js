import logo from './logo.svg';
import { Button } from 'antd';
import './App.css';

import {NavigationBar, Demo}  from './components/layout';
import { NavigationMenu } from './components/menu';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

function App() {
  return (
    <div className="App">
        <NavigationBar name="What" />
        <NavigationMenu dark/>
    </div>
  );
}

export default App;
