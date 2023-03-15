//our own graphql schema for our appolo server
const { gql } = require("graphql-tag");

// which things to query from the api will be written here
// like i wanna get the List of user so i write [User] and i will
// be returing those list into users field

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: String!
  }

  type Query {
    users: [User!]!
  }
`;

module.exports = { typeDefs };
