import React from 'react';

function GroupedCards({ name, data }) {
  return (
    <div>
      <h2>{name}</h2>
      {data.map((x) => (
        <div>
          <p>{x.name}</p>
          <p>{x.emoji}</p>
        </div>
      ))}
    </div>
  );
}

export { GroupedCards };
