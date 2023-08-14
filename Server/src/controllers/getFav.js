const { Favorite } = require("../DB_connection");

const getFav = async (req,res) => {
  try {
    const favorites = await Favorite.findAll();
    res.status(201).json(favorites);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = getFav;
