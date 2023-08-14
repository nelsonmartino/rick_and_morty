const { User } = require("../DB_connection");

async function postUser(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send("Faltan datos");
  }
  try {
    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: { password },
    });
    if (created) {
      return res.status(200).json(user);
    }
    res.status(400).send("El usuario ya existe");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = postUser;
