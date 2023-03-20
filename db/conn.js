const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('thoughts', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3307,
})

try{
    sequelize.authenticate()
    console.log("Connected!")
}catch(err){
    console.log(err)
}


module.exports = sequelize