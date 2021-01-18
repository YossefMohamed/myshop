
const bcrypt = require('bcrypt')
// this.password = await bcrypt.hash(this.password, 8);

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password:  bcrypt.hashSync("xxxx", 8)
  ,
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "john@example.com",
    password: bcrypt.hashSync("xxxx", 8),
  },
  {
    name: "Jane Doe",
    email: "jane@example.com",
    password: bcrypt.hashSync("xxxx", 8),
  },
];

module.exports = users;
