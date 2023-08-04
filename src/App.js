import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";

export default class App extends Component {

  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        
        
        <Routes>
          <Route exact path="/" element={<News key='general'  pagesize={5} country='in' category='General' />}/>
          <Route exact path="/business" element={<News key='business' pagesize={5} country='in' category="Business" />}/>
          <Route exact path="/sports" element={<News key='sports' pagesize={5} country='in' category='Sports' />}/>
          <Route exact path="/entertainment" element={<News key='entertainment' pagesize={5} country='in' category='Entertainment' />}/>
          <Route exact path="/health" element={<News key='health' pagesize={5} country='in' category='Health' />}/>
          <Route exact path="/science" element={<News key='science' pagesize={5} country='in' category='Science' />}/>
          <Route exact path="/technology" element={<News key='technology' pagesize={5} country='in' category='Technology' />}/>
        
        </Routes>
        </Router>

      </div>
    )
  }
}


