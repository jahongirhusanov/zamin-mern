import bcrypt from 'bcryptjs'

const users = [{
        name: 'Admin',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'sotuvchi 1',
        email: 'sotuvchi1@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'sotuvchi 2',
        email: 'sotuvchi2@example.com',
        password: bcrypt.hashSync('123456', 10),
    }
]

export default users