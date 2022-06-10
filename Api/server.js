const express = require('express');
require('dotenv').config({path: './Config/.env'})
require('./Config/dbConfig.js');
const artistRoutes = require('./routes/artists.routes');
const artistController = require('./controllers/artist.controller');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//cors
const corsOptions = {
   origin: process.env.CLIENT_URL,
   credentials: true,
   'allowedHeaders': ['sessionId', 'Content-Type'],
   'exposedHeaders': ['sessionId'],
   'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
   'preflightContinue': false
 }

 app.use(cors(corsOptions));


//route
app.use('/api/artist', artistRoutes);

//server
app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
 }
    )