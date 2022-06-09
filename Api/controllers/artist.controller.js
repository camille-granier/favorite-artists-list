const ArtistModel = require("../models/artist.model");
const ObjectID = require("mongoose").Types.ObjectId;

module.exports.getArtists = async (req, res) => {
    const artists = await ArtistModel.find().sort({ createdAt: -1 });
    res.status(200).json(artists);
  };

  module.exports.createArtist = async (req, res) => {
    
    const { name, genre, song } = req.body

  try {
    const artist = await ArtistModel.create({ name, genre, song });
    res.status(201).json({ 
      artist: artist._id,
      name: artist.name,
      genre: artist.genre,
      song: artist.song
    });
  }
  catch(err) {
    res.status(200).send(err)
  }
  };

  module.exports.updateArtist = (req, res) => {
    if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  const updatedArtist = {
    song: req.body.song
  };

  ArtistModel.findByIdAndUpdate(
    req.params.id,
    { $set: updatedArtist },
    { new: true },
    (err, docs) => {
      if (!err) res.send(docs);
      else console.log("Update error : " + err);
    }
  );
  };

  module.exports.deleteArtist = async (req, res) => {
    if (!ObjectID.isValid(req.params.id))
    return res.status(400).send('ID unkown ' + req.params.id)

    try {
        await ArtistModel.deleteOne(
            { _id: req.params.id }).exec();
            res.status(200).json({ message: "Successfully deleted"})
        
    } catch(err) {
        return res.status(500).json({ message: err })
    }
  };