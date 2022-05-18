import React from 'react';
import { GroupedCards } from '../GroupedCards';

function ResultPanel({ data }) {
  return (
    <div>
      <h2>ResultPanel</h2>
      {Object.keys(data).map((key) => <GroupedCards key={key} name={key} data={data[key]} />)}
    </div>
  );
}

export { ResultPanel };
