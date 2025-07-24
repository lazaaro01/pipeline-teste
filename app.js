const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('API está funcionando!');
});

module.exports = app;