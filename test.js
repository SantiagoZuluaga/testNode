const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

const sleep = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));

router.get('/', async (req, res) => {
    await sleep(3000);
    res.sendFile(path.join(__dirname + '/index.html'));
});

router.get('/artciles', (req, res) => {
    res.send({ message: 'Obteniendo articulos' })
});

router.post('/artciles', (req, res) => {
    res.send({ message: 'Creando articulo' })
});

router.put('/artciles', (req, res) => {
    res.send({ message: 'Actualizando articulo' })
});

router.delete('/artciles', (req, res) => {
    res.send({ message: 'Eliminando articulo' })
});

app.use('/', router);
app.listen(process.env.PORT || 5000);