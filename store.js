const connectDB=require('./connectDB');
const express=require('express');
const connectDB = require('./config/db');
const app=express();
const port=5001
app.use(express.json())
connectDB()
app.listen(port,console.log("server is running port:"+port))