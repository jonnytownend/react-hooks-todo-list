import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'

import Header from './components/header.component'
import TodoList from './components/todo-list.component'

const ContainerBody = styled.div`
  display: flex;
  justify-content: center;
`

const ContainerApp = styled.div`
  width: 100vw;
  max-width: 50rem;
  height: 100vh;
  border: 1px solid grey;
`

function App() {
  return (
    <ContainerBody>
      <ContainerApp>
        <Header />
        <TodoList />
      </ContainerApp>
    </ContainerBody>
  );
}

export default App;
