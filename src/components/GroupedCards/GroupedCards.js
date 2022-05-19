import React from 'react';
import styled from 'styled-components';
import { Card } from './Card';

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 300px));
  gap:1rem;
`;

const GroupedCardsContainer = styled.section`
  padding: 0 4rem;
  @media (min-width: 1000px) {
    padding: 0 3rem;
  }
  & > h2 {
    margin: 4rem 0 1rem 0;
  }
`
function GroupedCards({ name, data }) {
  return (
    <GroupedCardsContainer>
      <h2>{name}</h2>
      <CardContainer>
        {data.length && data.map((country) => (
          <Card key={country.name} countryData={country} />
        ))}
      </CardContainer>
    </GroupedCardsContainer>
  );
}

export { GroupedCards };
