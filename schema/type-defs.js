//our own graphql schema for our appolo server
const { gql } = require("graphql-tag");

// which things to query from the api will be written here
// like i wanna get the List of user so i write [User] and i will
// be returing those list into users field
// ! means required null not accceptable

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
    friends: [User]
    favouriteMovie: [Movie]
    likedMovie: Movies
  }

  type Movie {
    id: ID!
    name: String!
    yearOfPublication: Int!
    isInTheaters: Boolean!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
    movies: [Movie!]!
    movie(name: String!): Movie
  }

  #IT'S MORE OR LESS LIKE VALIDATION
  enum Nationality {
    CANADA
    BANGLADESH
    INDIA
  }
  enum Movies {
    GODFATHER
    GOODFELLAS
    RRR
  }
`;

module.exports = { typeDefs };
