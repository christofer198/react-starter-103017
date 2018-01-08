import ReactDOM from 'react-dom';
import React from 'react';
import Navbar from './Navbar';

ReactDOM.render(
  <Navbar
    color="green"
    icon="paint brush"
    title="Painterest"
    description="our app"
  />,
  document.getElementById('main')
);
