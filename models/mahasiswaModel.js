const {DataTypes} = require('sequelize');
const sequelize = require('../config/db');

const Mahasiswa = sequelize.define('Mahasiswa', {
    nim: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    nama: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    jurusan: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tahun_masuk: {
        type: DataTypes.STRING,
        allowNull: false
    },
    kelas: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'mahasiswa',
    timestamps: false,
});

module.exports = Mahasiswa;