import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const cacheOptions = {};

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://countries.trevorblades.com/',
  }),
  cache: new InMemoryCache(cacheOptions),
});

export { client };
