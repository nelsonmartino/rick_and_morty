const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  const { id, name, origin, status, image, species, gender } = req.body;
  if ((!id, !name || !origin || !status || !image || !species || !gender)) {
    return res.status(401).send("Faltan datos");
  }
  try {
    // console.log({name, origin, status, image, species, gender});
    await Favorite.findOrCreate({
      where: { id },
      defaults: {
        name,
        origin,
        status,
        image,
        species,
        gender,
      },
    });
    // console.log(favorite);
    const favorites = await Favorite.findAll();
    // console.log(favorites);
    res.status(201).json(favorites);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postFav;
