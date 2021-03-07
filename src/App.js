import React from 'react';
import IndexPage from './pages/IndexPage';
import './App.css';
import styled from "styled-components";

const App = () => {
  return (
    <Container>
      <IndexPage />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`

export default App;
