 const path = require('path');
const express = require('express');

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.send('Hello');
});

app.get('/help', (req, res) => {
    res.send('Help');
});

app.get('/about', (req, res) => {
    res.send('About');
});

app.get('/weather', (req, res) => {
    res.send('weather');
});

app.listen(3000, () => {
    console.log('server init');
});