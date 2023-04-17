const Sequelize = require('sequelize');

const sequelize = new Sequelize("celke", "root", "123456", {
     host: 'Localhost',
     dialect: 'mysql'
});

sequelize.authenticate()
.then(function(){
     console.log('conexão com o banco de daos realizada com sucesso!')

}).catch(function(){
     console.log('erro ao conectar ao banco de dados')
})

module.exports = sequelize;