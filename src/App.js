import React from 'react';
import Navbar from './Navbar';
import PaintingList from './PaintingList';

const App = () => {
  return (
    <div>
      <Navbar icon="paint brush" title="Painterest" description="our app" />
      <PaintingList />
    </div>
  );
};

export default App;
