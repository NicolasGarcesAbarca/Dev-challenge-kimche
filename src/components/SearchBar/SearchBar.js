import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { ResultPanel } from '../ResultPanel';
import { ALL_NATIONS } from '../../utils/graphql/queries';
import { useToggle } from '../../hooks/useToggle';
import { filterCountriesByName, groupByContinent, groupByLanguage } from './functions';

function SearchBar() {
  const { loading, error, data } = useQuery(ALL_NATIONS);
  const [isContinent, toggle] = useToggle(true);
  const [inputName, setInputName] = useState('');
  const [groupedData, setGroupedData] = useState([]);

  useEffect(() => {
    if (data && data.countries && inputName) {
      const filteredCountries = filterCountriesByName(data.countries, inputName);
      if (isContinent) {
        const groupedCountries = groupByContinent(filteredCountries);
        setGroupedData(groupedCountries);
      } else {
        const groupedCountries = groupByLanguage(filteredCountries);
        setGroupedData(groupedCountries);
      }
    }
  }, [inputName, isContinent, data])

  const handleInput = (e) => {
    setInputName(e.target.value);
  }

  if (error) {
    return <p>Error</p>
  }

  return (
    <div>
      <h1>Country Search</h1>
      {
        loading ? <p>Loading...</p>
          : (
            <div>
              <form>
                <label htmlFor="name">
                  <input type="text" name="name" id="name" value={inputName} onChange={handleInput} />
                </label>
              </form>
              <div>
                <p>group by:</p>
                {isContinent ? <p>continent</p> : <p>language</p>}
                <button type="button" onClick={() => toggle()}>continent</button>
                <button type="button" onClick={() => toggle()}>language</button>
              </div>
              <ResultPanel data={groupedData} />
            </div>
          )
      }
    </div>
  );
}

export { SearchBar };
