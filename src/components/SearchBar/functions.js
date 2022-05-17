function filterCountriesByName(countries, input) {
  return countries.filter((country) => country.name.toLowerCase().includes(input.toLowerCase()));
}

function groupByContinent(countries) {
  return countries.reduce((acc, country) => {
    const storage = acc;
    const group = country.continent.name;

    storage[group] = storage[group] || [];

    storage[group].push(country);

    return storage;
  }, {});
}

function groupByLanguage(countries) {
  return countries.reduce((acc, country) => {
    const storage = acc;

    const { languages } = country;

    languages.forEach((language) => {
      storage[language.name] = storage[language.name] || [];
      storage[language.name].push(country);
    })

    return storage;
  }, {});
}
export { filterCountriesByName, groupByContinent, groupByLanguage };
