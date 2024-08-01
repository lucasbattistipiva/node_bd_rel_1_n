const Fabricante = require('../model/Fabricante')
const Produto = require('../model/Produto')

Fabricante.hasMany(Produto,{
    foreignKey: 'fabricanteId',
    as: 'fabricante',
    onDelete: 'CASCADE'
})

Produto.belongsTo(Fabricante,{
    foreignKey: 'fabricanteId',
    as: 'fabricante',
    allowNull: false
})

module.exports = {Produto,Fabricante}