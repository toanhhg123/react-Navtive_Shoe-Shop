var bcrypt = require('bcryptjs');
const salt = 10;

const users = [
    {
        name: 'admin',
        email: 'admin@example.com',
        password: bcrypt.hashSync('admin', salt),
        isAdmin: true,
    },
    {
        name: 'user',
        email: 'user@example.com',
        password: bcrypt.hashSync('123456', salt),
        isAdmin: false,
    },
];

module.exports = users;
