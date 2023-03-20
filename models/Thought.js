const { DataTypes } = require('sequelize')

const User = require('./User')

const db = require('../db/conn')

const Thought = db.define('Thought', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
    }
})

Thought.belongsTo(User)
User.hasMany(Thought)

module.exports = Thought