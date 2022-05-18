import { gql } from '@apollo/client';

const ALL_NATIONS = gql`
    query{
        countries{
        code
        name
        emoji
        continent{
            name
        }
        languages{
            name
        }
        }
  }
`;

const FIND_COUNTRY = gql`
  query findCountryByCode($code: ID!){
       
    country(code: $code){
        native
        phone
        capital
        currency
      }
    }
`;

export { ALL_NATIONS, FIND_COUNTRY };
