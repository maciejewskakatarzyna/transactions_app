import React from 'react';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Table from './components/Table/Table';
import Sum from './components/Sum/Sum';
import styled from 'styled-components';
import LargestAmount from './components/LargestAmount/LargestAmount';

const Wrapper = styled.div`
  min-width: 80rem;
  display: flex;
  flex-direction: column;
  padding: 5rem;
`;

const TopWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

function App() {
  return (
    <Wrapper>
      <TopWrapper>
        <div>
          <Header />
          <Form />
        </div>
        <LargestAmount />
      </TopWrapper>
      <Table />
      <Sum />
    </Wrapper>
  );
}

export default App;
