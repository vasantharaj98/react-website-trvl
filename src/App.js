import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/home';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import products from './components/pages/products';
import services from './components/pages/services';
import signup from './components/pages/signup';
import Footer from './components/footer';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/services' component={services}></Route>
          <Route path='/products' component={products}></Route>
          <Route path='/sign-up' component={signup}></Route>
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
