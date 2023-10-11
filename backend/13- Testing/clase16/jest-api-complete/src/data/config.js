const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("posts.sqlite", "", "", {
    dialect: "sqlite",
    host: "src/data/db.sqlite"
});

module.exports = sequelize