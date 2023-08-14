const { User } = require("../DB_connection");

const login = async (req, res) => {
  const { email, password } = req.query;
  if (!email || !password) {
    res.status(400).send("Faltan datos");
  }
  try {
    const user = await User.findOne({ where: { email, password } });
    if (user) {
      res.status(200).json({ access: true });
    } else {
      res.status(403).send("Usuario y/o contraseña incorrectos");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = login;
