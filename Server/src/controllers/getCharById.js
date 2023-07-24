const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

async function getCharById(req, res) {
  const { id } = req.params;
  
  // *** VERSIÓN PROMESA ***
  // axios(`${URL}${id}`)
  //   .then((response) => {
  //     const character = {
  //       id: id,
  //       name: response.data.name,
  //       gender: response.data.gender,
  //       species: response.data.species,
  //       origin: response.data.origin.name,
  //       image: response.data.image,
  //       status: response.data.status,
  //     };
  //     return character.name
  //       ? res.status(200).json(character)
  //       : res.status(404).send("Not found");
  //   })
  //   .catch((err) => {
  //     res.status(500).json({ error: err.message });
  //   });

  // *** VERSIÓN ASYNC AWAIT ***
  try {
    const response = await axios(`${URL}${id}`);
    const character = {
      id: id,
      name: response.data.name,
      gender: response.data.gender,
      species: response.data.species,
      origin: response.data.origin.name,
      image: response.data.image,
      status: response.data.status,
    };
    return character.name
      ? res.status(200).json(character)
      : res.status(404).send("Not found");
  } catch (error) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = getCharById;
