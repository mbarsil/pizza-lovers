import React from 'react';

import { Container, Header, Logo, Link } from './App.styled';
import logo from './logo.svg';

const App: React.FC = () => {
  return (
    <Container className="App">
      <Header>
        <Logo src={logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </Link>
      </Header>
    </Container>
  );
};

export default App;
