const {Sequelize} = require('sequelize')
const sequelize = new Sequelize('rel_1_n','root','senai',{
    dialect:'mysql',
    host: 'localhost'
})

sequelize.authenticate().then(()=>{
    console.log('Conexão realizada com sucesso')
}).catch((err)=>{
    console.error('erro de conexão com o banco',err)
})

module.exports = sequelize