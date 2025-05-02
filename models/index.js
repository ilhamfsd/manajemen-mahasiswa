const sequelize = require('../config/db');
const Mahasiswa = require('./mahasiswaModel');

sequelize.sync().then(() => {
  console.log("Database synchronized");  
}).catch(err => {
    console.error("Error syncing database:", err);
});

module.exports = {Mahasiswa};