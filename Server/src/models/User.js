const DataTypes = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "User",
    //Si no creo un primary key, sequelize lo crea en forma automática (lo vamos a hacer así en este caso)
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        isEmail: true,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
