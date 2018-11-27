import React from 'react';
import { Link } from '@reach/router';

export default () => (
  <header>
    <Link to="/">home</Link>
    {' '}
    <Link to="/another">another</Link>
    {' '}
    <Link to="/async">async</Link>
  </header>
);
