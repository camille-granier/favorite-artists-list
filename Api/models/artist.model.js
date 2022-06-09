const mongoose = require('mongoose');

const ArtistSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        trim: true,
        maxlength: 30,
      },
      genre: {
        type: String,
        maxlength: 30,
      },
      song: {
        type: String,
      },
    },
    {
      timestamps: true,
    }
  );
  
  module.exports = mongoose.model('artist', ArtistSchema);