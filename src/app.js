import express from 'express';
const app = express();

app.get('/', (req, res) => {
    return res.json({
        "msg" : "Ruta Principal"
    })
})
app.listen(3000, () => {
    console.log("Servidor iniciado");
})