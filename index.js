const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

const sleep = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));

router.get('/', async (req, res) => {
    await sleep(3000);
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.use('/', router);
app.listen(process.env.port || 5000);