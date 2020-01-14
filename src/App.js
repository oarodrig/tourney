import React from 'react';
import Bracket from './Bracket/Bracket';

function App() {
  const players = [
    { name: 'Omar' },
    { name: 'Henry' },
    { name: 'Craig' },
    { name: 'Wes' },
    { name: 'Brad' },
  ];

  return (
    <Bracket players={players}/>
  );
}

export default App;
