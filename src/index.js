const express = require('express');
const app = express();
app.use(express.json());
const axios = require("axios");
const bilhetes = {};
contador = 0;
app.get('/bilhetes', (req, res) => {
    res.send(bilhetes);
});
app.put('/bilhetes', async (req, res) => {
    contador++;
    const {
        texto
    } = req.body;
    bilhetes[contador] = {
        contador,
        texto
    }
    await axios.post("http://localhost:10000/eventos", {
        tipo: "BilhetesCriado",
        dados: {
            contador,
            texto,
        },
    });
    res.status(201).send(bilhetes[contador]);
});
app.listen(4000, () => {
    console.log('Bilhetes. Porta 4000');
});