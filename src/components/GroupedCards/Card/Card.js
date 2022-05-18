import React from 'react';
import styled from 'styled-components';

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

function Card({ data }) {
  console.log(data);
  return (
    <CardContainer>
      <div>
        <p>{data.emoji}</p>
        <h3>{data.name}</h3>
      </div>
      <div>
        here more info
      </div>
    </CardContainer>
  )
}

export { Card }
