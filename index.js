require ('dotenv').config();
const express = require('express');
const app = express();
const cors=require("cors");
const connection = require('./dataBase');

//database connection 
connection()

// process.on('uncaughtException', )
// process.on('SIGTERM',)
//middlewares

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8080;
app.listen(port,()=>{console.log(`Listening on port ${port}...`)})