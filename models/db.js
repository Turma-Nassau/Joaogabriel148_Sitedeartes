const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('João','root','777777', {
    host: 'localhost',
    dialect: 'mysql'
});

try {
    sequelize.authenticate()
    console.log('CONEXÃO COM O BANCO DE DADOS REALIZADA COM SUCESSO.');
      } 
catch (error) {
        console.error('ERRO CONEXÃO NÃO REALIZADA:', error)
      }


module.exports = sequelize;
