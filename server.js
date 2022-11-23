const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.static("public"));

app.get('/mensaje',(req,res) =>{

    res.send('Hola mensaje desde hiroku');
})
app.get('/info',(req,res) =>{

    res.send(`Servidor escuchando en puerto ${PORT}`);
})

/*============================[Servidor]============================*/
const PORT = process.env.PORT;
const server = app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en puerto ${PORT}`);
})
server.on('error', error=>{
    console.error(`Error en el servidor ${error}`);
});