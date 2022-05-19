import React from 'react';
import styled from 'styled-components';
import { GroupedCards } from '../GroupedCards';

const Container = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;  
`

function ResultPanel({ data }) {
  return (
    <Container>
      {Object.keys(data).map((key) => <GroupedCards key={key} name={key} data={data[key]} />)}
    </Container>
  );
}

export { ResultPanel };
