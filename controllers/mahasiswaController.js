const { Where } = require("sequelize/lib/utils");
const Mahasiswa = require("../models/mahasiswaModel");
const { where } = require("sequelize");

exports.getAll = async (req, res) => {
    const data = await Mahasiswa.findAll();
    res.json(data);
};

exports.getById = async (req, res) => {
    const data = await Mahasiswa.findByPk(req.params.id);
    if (!data) return res.status(404).json({msg: "Data tidak ditemukan"});
    res.json(data);
};

exports.create = async (req, res) => {
    try {
        const data = await Mahasiswa.create(req.body);
        res.status(201).json(data);
    } catch (err) {
        res.status(400).json({msg: err.message});
        console.log(err)
    }
};

exports.update = async (req, res) => {
    try {
        await Mahasiswa.update(req.body, {where: {id: req.params.id}});
        const data = await Mahasiswa.findByPk(req.params.id);
        res.json({msg: "Data berhasil di update", data});
    } catch (err) {
        res.status(400).json({msg: err.message});
        console.log(err)
    }
    
};

exports.delete = async (req, res) => {
    const data = await Mahasiswa.findByPk(req.params.id);
    if (!data) return res.status(404).json({msg: "Data tidak ditemukan"});
    await data.destroy();
    res.status(204).send();
};
