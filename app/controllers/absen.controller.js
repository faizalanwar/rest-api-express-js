const db = require('../models');
const absen = db.absens;

exports.create = async (req, res) => {
    try {
        const newabsen = {
            nama: req.body.nama,
            tanggal: req.body.tanggal,
            waktu: req.body.waktu,
            status: req.body.status
        };
        const data = await absen.create(newabsen);
        res.status(201).send({
            message: "absen created successfully!",
            data: data
        });
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the absen."
        });
    }
}

exports.index = async (req, res) => {
    try {
        const data = await absen.findAll();
        res.status(200).send({
            message: "absen retrieved successfully!",
            data: data
        });
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving absen."
        });
    }
};

exports.update = async (req, res) => {
    try {
        const id = req.params.id;
        const [num] = await absen.update(req.body, {
            where: { id: id }
        });

        if (num === 1) {
            res.json({
                message: "absen updated successfully!"
            });
        } else {
            res.status(404).send({
                message: `Cannot update absen with id=${id}. Maybe absen was not found!`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while updating the absen."
        });
    }
}

exports.delete = async (req, res) => {
    try {
        const id = req.params.id;
        const num = await absen.destroy({
            where: { id: id }
        });

        if (num === 1) {
            res.status(200).send({
                message: "absen deleted successfully!"
            });
        } else {
            res.status(404).send({
                message: `Cannot delete absen with id=${id}. Maybe absen was not found!`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while deleting the absen."
        });
    }
}   