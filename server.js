const express = require('express');
const app = express();
const User = require('./models/user');

app.use(express.json());

const db = require('./models/db');

app.get('/' , (req , res) => {
     res.send('macacos voadores tomaram conta do server');
});

app.post('/cadastrar' , async (req , res) => {
     console.log(req.body);

     await User.create(req.body)
     .then(() => {
          return res.json({
               erro: false,
               mensagem: "Ususário cadastrado com sucesso!"
          });
     }).catch(() => {
          return res.status(400).json({
               erro: false,
               mensagem: "Erro: Ususário não cadastrado!"
          });
     });

     res.send('Pagina Cadastrar');
});

app.listen(8080, () => {
     console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});