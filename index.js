const express = require('express');
const app = express();
const router = express.Router();

router.get('/articles', (req, res) => {
    res.send({ message: 'Obteniendo articulos' })
});

router.post('/articles', (req, res) => {
    res.send({ message: 'Creando articulo' })
});

router.put('/articles', (req, res) => {
    res.send({ message: 'Actualizando articulo' })
});

router.delete('/articles', (req, res) => {
    res.send({ message: 'Eliminando articulo' })
});

app.use('/', router);
app.listen(process.env.PORT || 5000);