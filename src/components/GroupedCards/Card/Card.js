import React from 'react';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';
import { FIND_COUNTRY } from '../../../utils/graphql/queries';

const DataList = styled.ul`
    list-style: none;
    
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  background-color: #EFEBE3;
  & > div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap:0.6rem;
    background-color: #F1A208;
    border-radius: 10px 10px 0 0;
  }
  strong{
    text-transform:capitalize
  }
`;

function Card({ countryData }) {
  const configQuery = { variables: { code: countryData.code } };
  const { loading, error, data } = useQuery(FIND_COUNTRY, configQuery);

  if (error) {
    return <p>Error</p>
  }
  return (
    <CardContainer>
      <div>
        <p>{countryData.emoji}</p>
        <h3>{countryData.name}</h3>
      </div>
      {loading ? <p>loading</p> : (
        <DataList>
          {Object.keys(data.country).map((key) => {
            if (key === '__typename') {
              return null;
            }

            return (
              <li key={key}>
                <p>
                  <strong>
                    {key}
                    :
                    {' '}
                  </strong>

                  {data.country[key]}
                </p>
              </li>
            )
          })}
        </DataList>
      )}
    </CardContainer>
  )
}

export { Card }
