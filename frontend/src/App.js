/* eslint-disable import/named */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Pages
import AboutPage from './components/pages/AboutPage';
import HomePage from './components/pages/HomePage';
// Components
import GlobalStyle from './components/styles/GlobalStyle';
import { Navbar } from './components/layout';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
