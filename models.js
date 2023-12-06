const { sequelize }  = require('./db');
const { DataTypes }  = require('sequelize');

const Todo = sequelize.define('task',{
    title:{
        type:DataTypes.STRING,
        validate:{
            max:200
        }
    },
    description:{
        type:DataTypes.TEXT,
    },
    is_completed:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    }
});

// sequelize.sync();

module.exports = Todo;