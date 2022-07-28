var sequelize = require("sequelize")
var banco = require("../configs/banco-config")

var carro = banco.define("evento",{
    id: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    nomeDoEvento: {
        type: sequelize.STRING(20),
        allowNull: false,
    },
    numeroDeIngressosDisponiveis: {
        type: sequelize.INTEGER,
        allowNull: false,
    },
    valorDoIngresso: {
        type: sequelize.INTEGER,
        allowNull: false,
    },
    data: {
        type: sequelize.STRING(20),
        allowNull: false,
    },
    horario: {
        type: sequelize.STRING(20),
        allowNull: false,
    },
    local: {
        type: sequelize.STRING(20),
        allowNull: false,
    },
},{
    freezeTableName: true,
    timestamps: false
})

carro.sync()

module.exports = carro