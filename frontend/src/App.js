import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductsPage from './components/pages/ProductsPage';
import GlobalStyle from './components/styles/GlobalStyle';
import AboutPage from './components/pages/AboutPage';
import HomePage from './components/pages/HomePage';

const App = () => {
  return (
    <div className="container">
      {/* Navbar */}
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/products" component={ProductsPage} />
        </Switch>
      </Router>
      <GlobalStyle />
    </div>
  );
};

export default App;
