import React from 'react';
import styled from 'styled-components';
import { Card } from './Card';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  & > h2 {
    margin-bottom: 0.5rem;
  }

`;

function GroupedCards({ name, data }) {
  return (
    <CardContainer>
      <h2>{name}</h2>
      {data.map((country) => (
        <Card key={country.name} data={country} />
      ))}
    </CardContainer>
  );
}

export { GroupedCards };
