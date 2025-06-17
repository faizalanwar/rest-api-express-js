module.exports = (sequelize, Sequelize) => {
    const Absen = sequelize.define("absen", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nama: {
            type: Sequelize.STRING,
            allowNull: false
        },
        tanggal: {
            type: Sequelize.DATE,
            allowNull: false
        },
        waktu: {
            type: Sequelize.TIME,
            allowNull: false
        },
        status: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        timestamps: false // Disable createdAt and updatedAt fields
    });
    return Absen;
}