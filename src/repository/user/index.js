const User = require('../../models/User');

const user = {

  list: () => {
    const users = User.query()  
    .then(users => {
        return users;
    });
    return users;
  },

  getById: (id) => {
    const user = User.query()
    .where('id', id)
    .eager('messages')
    .then(user => {
        return user;
    });

    return user;
  }

}

module.exports = user;