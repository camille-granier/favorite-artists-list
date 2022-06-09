const ArtistModel = require("../models/artist.model");
const ObjectID = require("mongoose").Types.ObjectId;

module.exports.getArtists = (req, res) => {
    ArtistModel.find((err, docs) => {
      if (!err) res.send(docs);
      else console.log("Error to get data : " + err);
    }).sort({ createdAt: -1 });
  };

  module.exports.createArtist = async (req, res) => {
    
    const newArtist = new ArtistModel({
        artistId: req.body.artistId,
        name: req.body.name,
        genre: req.body.name,
        song: req.body.song
      });

      try {
        const artist = await newArtist.save();
        return res.status(201).json(artist);
      } catch (err) {
        return res.status(400).send(err);
      }
  };

  module.exports.updateArtist = (req, res) => {
    if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  const updatedArtist = {
    message: req.body.message,
    genre: req.body.name,
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