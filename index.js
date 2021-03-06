require ('dotenv').config();
const express = require('express');
const app = express();
const cors=require("cors");
const connection = require('./dataBase');
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
//database connection 
connection();

// process.on('uncaughtException', )
// process.on('SIGTERM',)

//middlewares

app.use(express.json());
app.use(cors());
app.use(express.static(__dirname + "./public"));
// routes 

app.use("/api/user",userRoutes);
app.use("/api/auth",authRoutes);
const port = process.env.PORT || 8080;
app.listen(port,()=>{console.log(`Listening on port ${port}...`)})