const db = require('../../db')

db.authenticate()
    .then(()=>{
        console.log('connection has been established successfully')
    })
    .catch(err => {
        console.error('Unable to connect to the database:',err)
    })