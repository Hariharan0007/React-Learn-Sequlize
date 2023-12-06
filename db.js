const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'sequelize_todo',
    'root',
    '',{
        dialect:'mysql',
        host:'localhost'
    }
);

const connectToDb = async () => {
    try {
        await sequelize.authenticate();
        console.log("Successfully connected to Database...");
    } catch (error) {
        console.log(error);
    }
}

module.exports = { sequelize, connectToDb};