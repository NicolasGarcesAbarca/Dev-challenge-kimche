import React from 'react';
import styled from 'styled-components';
import { Card } from './Card';

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 300px));
  gap:1rem;
`;

function GroupedCards({ name, data }) {
  return (
    <>
      <h2>{name}</h2>
      <CardContainer>
        {data.length && data.map((country) => (
          <Card key={country.name} countryData={country} />
        ))}
      </CardContainer>
    </>
  );
}

export { GroupedCards };
