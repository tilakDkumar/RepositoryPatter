const express = require('express');
const cors = require('cors')
const conn =require('./conn')
const app =express()



app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(cors())


module.exports = {app}