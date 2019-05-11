import React from 'react';
import logo from './logo.svg';

import './App.css';
import 'antd/dist/antd.css';

import {BrowserRouter as Router} from 'react-router-dom'; //determines which route we are one and what needs to be rendered.
import BaseRouter from './routes';

import CustomLayout from './containers/Layout';


function App() {
  return (
    <div className="App">
    <Router>
          <CustomLayout>
            <BaseRouter/>
          </CustomLayout>
    </Router>

      </div>
  );
}

export default App;
