import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import LoginForm from './techproofing-components/LoginForm/LoginForm';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Status from './techproofing-components/Status/Status';

function App() {


  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path='/login' component={LoginForm} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/status' component={Status} />
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
