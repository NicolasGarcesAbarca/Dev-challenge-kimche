import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';
import { ResultPanel } from '../ResultPanel';
import { ALL_NATIONS } from '../../utils/graphql/queries';
import { useToggle } from '../../hooks/useToggle';
import { filterCountriesByName, groupByContinent, groupByLanguage } from './functions';

const Container = styled.main`
  padding: 0 2rem;
  @media (min-width: 1000px) {
    padding: 0 10rem;
  }
  h1{
    text-align: center;
    margin: 3rem 0 3rem 0 ;
  }
`;

const ButtonContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap:1.5rem;
`;

const Button = styled.button`
  border: none;
  padding:0.7rem 1.4rem;
  border-radius: 4px;
  font-weight: bold;
  font-size: 1rem;
  background-color: ${(props) => (props.isActive ? '#4837b7' : '#EFEBE3')};
  color: ${(props) => (props.isActive ? '#e8e8e8' : '#170104')};
  &:hover {
    -webkit-transition: background-color 500ms ease-in-out;
    -ms-transition: background-color 500ms ease-in-out;
    transition: background-color 500ms ease-in-out;
    background-color: ${(props) => (props.isActive ? '#1a0f63' : '#a8a6a2')};
  }
`;

const Form = styled.form`
  display:flex;
  flex-direction: column;
  align-items:center;
  margin-bottom:3rem;

  & > p {
    width: 80%;
    align-text:right;
    margin: 0.5rem 0;
  }
`;

const Input = styled.input.attrs(({ type, name, value }) => ({ type, name, value }))`
  font-size: 1.2rem;
  border: 2px solid hsl(0, 0%, 50%);
  border-radius: 4px;
  width:80%;  
`;

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
    } else {
      setGroupedData([]);
    }
  }, [inputName, isContinent, data])

  const handleInput = (e) => {
    setInputName(e.target.value);
  }

  if (error) {
    return <p>Error</p>
  }

  return (
    <Container>
      <h1>Country Search</h1>
      {
        loading ? <p>Loading...</p>
          : (
            <div>
              <div>
                <Form>
                  <p htmlFor="name">
                    Escribe el nombre de un país
                  </p>
                  <Input type="text" id="name" name="name" value={inputName} onChange={handleInput} />
                </Form>
                <ButtonContainer>
                  <strong>Group by:</strong>
                  <Button type="button" onClick={() => toggle()} isActive={isContinent}>continent</Button>
                  <Button type="button" onClick={() => toggle()} isActive={!isContinent}>language</Button>
                </ButtonContainer>
              </div>
              <ResultPanel data={groupedData} />
            </div>
          )
      }
    </Container>
  );
}

export { SearchBar };
