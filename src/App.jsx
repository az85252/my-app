import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'

import Customers from './Customers'
import CustomerDetails from './CustomerDetails'
const App = () => {
  return (
    <Router>
      <div className="app">
        <div className="header">
          <span>Welcome to Tesla</span>
          <nav>
            <Link to="/">Home</Link>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<Customers />} />
          <Route path="/:id" element={<CustomerDetails/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App

