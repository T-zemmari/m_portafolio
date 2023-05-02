import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './views/Home/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import AOS from "aos";

  
export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className="app ">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
        </Switch>
      </Router>
    
    </div>
  );
}

