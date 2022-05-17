import React from 'react';
import { ResultPanel } from '../ResultPanel';

function SearchBar() {
  // groupOption true: group by continent, false: group by language

  const handleInput = (e) => {
    console.log(e.target.value);
  }

  return (
    <div>
      <form>
        <label htmlFor="name">
          <input type="text" name="name" id="name" onChange={handleInput} />
        </label>
      </form>
      <div>
        <p>group by:</p>
        <button type="button">continent</button>
        <button type="button">language</button>
      </div>
      <ResultPanel />
    </div>
  );
}

export { SearchBar };
