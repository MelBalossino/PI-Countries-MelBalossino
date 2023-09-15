const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('activity', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            unique: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                is: /^[ a-zA-ZÀ-ÿ\u00f1\u00d1]*$/               //sólo letras, mayúsculas, y espacios
            }
        },
        difficulty: {
            type: DataTypes.ENUM(["1", "2", "3", "4", "5"]),
            allowNull: false,
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        season: {
            type: DataTypes.ENUM(["Summer", "Fall", "Winter", "Spring"]),
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isUrl: true
            }
        },
    })
};

