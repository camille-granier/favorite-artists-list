const express = require('express');
require('dotenv').config({path: './Config/.env'})
require('./Config/dbConfig.js');

const app = express();

//server
app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
 }
    )