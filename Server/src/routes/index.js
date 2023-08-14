const getCharById = require("../controllers/getCharById");
// const { postFav, deleteFav } = require("../controllers/handleFavorites");
const login = require("../controllers/login");
const postUser = require("../controllers/postUser");
const postFav = require("../controllers/postFav");
const deleteFav = require("../controllers/deleteFav");
const getFav = require("../controllers/getFav");

// const express = require("express");
// const router = express.Router();

//Mejor desestructurando
const { Router } = require("express");
const router = Router();

router.get("/character/:id", getCharById);

router.get("/login", login);

router.get("/fav", getFav);

router.post("/login", postUser);

router.post("/fav", postFav);

router.delete("/fav/:id", deleteFav);

module.exports = router;
