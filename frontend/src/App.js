import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutPage from './components/pages/AboutPage';
import HomePage from './components/pages/HomePage';
import ProductsPage from './components/pages/ProductsPage';
import ServicesPage from './components/pages/ServicesPage';
import GlobalStyle from './components/styles/GlobalStyle';

const App = () => {
  return (
    <div className="container">
      {/* Navbar */}
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/products" component={ProductsPage} />
          <Route path="/services" component={ServicesPage} />
        </Switch>
      </Router>
      <GlobalStyle />
    </div>
  );
};

export default App;
