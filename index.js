const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes');
const { sequelize, connectToDb} = require('./db');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api',apiRoutes);

const PORT = 3000;

app.get('/',(req,res)=>{
    res.status(200).json({"MESG":"Welcome to learn sequlize"});
})


app.listen(PORT ,async ()=>{
    console.log("Server is running in the port "+PORT);
    await connectToDb();
})