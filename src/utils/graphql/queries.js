import { gql } from '@apollo/client';

const ALL_NATIONS = gql`
    query{
        countries{
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

export { ALL_NATIONS };
