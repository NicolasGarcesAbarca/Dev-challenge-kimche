import React from 'react';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';
import { FIND_COUNTRY } from '../../../utils/graphql/queries';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 10px;
  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap:0.6rem
  }
`;

function Card({ wea }) {
  const configQuery = { variables: { code: wea.code } };
  const { loading, error, data } = useQuery(FIND_COUNTRY, configQuery);

  if (error) {
    return <p>Error</p>
  }
  return (
    <CardContainer>
      <div>
        <p>{wea.emoji}</p>
        <h3>{wea.name}</h3>
      </div>
      {loading ? <p>loading</p> : (
        <div>
          <p>{data.country.capital}</p>
        </div>
      )}
    </CardContainer>
  )
}

export { Card }
