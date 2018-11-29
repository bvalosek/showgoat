import React from 'react';
import { Router } from '@reach/router';
import Header from './Header';
import Route from './Route';
import HomePage from './HomePage';
import AnotherPage from './AnotherPage';
import AsyncDataPage from './AsyncDataPage';
import NotFoundPage from './NotFoundPage';
import './App.css';

export default () => (
  <>
    <Header />

    <Router>
      <Route path="/" component={HomePage} />
      <Route path="/another" component={AnotherPage} />
      <Route path="/async" component={AsyncDataPage} />
      <Route default component={NotFoundPage} />
    </Router>
  </>
);
