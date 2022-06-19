import gql from 'graphql-tag'

// Creating a syntax error here on purpose:
const aSyntax Error = () => {
}

const getUser = gql`
  query MyQ {
    user {
      name
    }
  }
`
