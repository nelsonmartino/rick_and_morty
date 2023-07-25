const users = require("../utils/users");

// Tambien se puede hacer _ module.exports = () => {} _ y la bautizo cuando la importo desde el otro archivo

function login(req, res) {
  const { email, password } = req.query;
  const accessUser = users.find(
    (user) => user.email === email && user.password === password
  );
  accessUser
    ? res.status(200).json({ access: true })
    : res
        .status(403)
        .json({ access: false, message: "Usuario y/o contraseña incorrectos" });

  // if (accessUser) {
  //   return res.status(200).json({ access: true });
  // } else {
  //   return res.status(403).json({ access: false });
  // }
}

// login({query:{ email: "nelson@email.com", password: "asd123" }});

module.exports = login;
