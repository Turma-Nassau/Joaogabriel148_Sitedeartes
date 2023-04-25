const express = require('express');
const app = express();
const User = require('./models/User');

app.use(express.json());

app.get("/", async (req, res) => {
    res.send("página inicial - testes");
});

app.post("/cadastrar", async (req, res) => {
    //console.log(req.body);

    await User.create(req.body)
    .then(() =>{
        return res.json({
            error : false,
            mensagem : "Usuário cadastrado com sucesso !"
        })
    }).catch(()=>{
        return res.status(400).json({
            error : true,
            mensagem : "Erro: Usuário não cadastrado com sucesso !"
        })
     })

    //res.send("página cadastrar");
});

app.post("/pesquisa", async (req, res) => {
    res.send("página pesquisa");
});

app.post("/pagamentos", async (req, res) => {
    res.send("página pagamentos");
});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
})