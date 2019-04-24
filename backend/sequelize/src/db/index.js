const Sequelize = require('sequelize')
const dbConfig = {
    database:'study',
    username:'root',
    password:'yk@123456',
    host:'129.204.123.16',
    dialect:'mysql'
}

const sequelize = new Sequelize(dbConfig.database,dbConfig.username,dbConfig.password,{
    host:dbConfig.host,
    dialect:dbConfig.dialect,
    operatorsAliases: false,
    //设置时区
    timezone:'+08:00',
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    }
})

module.exports = sequelize;