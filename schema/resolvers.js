lear
//resolve fields
const { UserList } = require("../FakeData.js");
const _ = require("lodash")

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
    user: (_,args) =>  {
      return 
    }
  },
};

module.exports = { resolvers };
