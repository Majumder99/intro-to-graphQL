//resolve fields
const { UserList, MovieList } = require("../FakeData.js");
const _ = require("lodash");

const resolvers = {
  Query: {
    //here we will write our functions to call the api
    // and get the data from the database and we will return
    // the data.now here i have written users means in higher
    // header Query there is users named field that will be called
    // and when that is called what the function are gonna do will
    // be described here, so it is going to return the data in this
    // case it is UserList
    users() {
      return UserList;
    },
    user: (parent, args) => {
      const id = args.id;
      //args is the argument that is passing
      const user = _.find(UserList, { id: Number(id) });
      return user;
    },
    movies: () => {
      return MovieList;
    },
    movie: (parent, args) => {
      const name = args.name;
      //args is the argument that is passing
      const movie = _.find(MovieList, { name });
      return movie;
    },
  },
};

module.exports = { resolvers };
