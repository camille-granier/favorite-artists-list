const express = require('express');
require('dotenv').config({path: './Config/.env'})
require('./Config/dbConfig.js');
const artistRoutes = require('./routes/artists.routes');
const artistController = require('./controllers/artist.controller');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//route
app.use('/api/artist', artistRoutes);

//server
app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
 }
    )