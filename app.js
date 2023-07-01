const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    // Gửi tệp HTML theo đường dẫn tương đối
    res.sendFile(path.join(__dirname, 'public', 'training', 'index.html'));
});

app.get('/css-grid-attack', (req, res) => {
    // Gửi tệp HTML theo đường dẫn tương đối
    res.sendFile(path.join(__dirname, 'public', 'css-grid-attack', 'index.html'));
});

app.get('/css-selectors-cheatsheet', (req, res) => {
    // Gửi tệp HTML theo đường dẫn tương đối
    res.sendFile(path.join(__dirname, 'public', 'css-selectors-cheatsheet', 'index.html'));
});

app.get('/Dinner', (req, res) => {
    // Gửi tệp HTML theo đường dẫn tương đối
    res.sendFile(path.join(__dirname, 'public', 'Dinner', 'index.html'));
});

app.get('/JSRobot', (req, res) => {
    // Gửi tệp HTML theo đường dẫn tương đối
    res.sendFile(path.join(__dirname, 'public', 'JSRobot', 'index.html'));
});

app.get('/flexboxfroggy', (req, res) => {
    // Gửi tệp HTML theo đường dẫn tương đối
    res.sendFile(path.join(__dirname, 'public', 'flexboxfroggy', 'index.html'));
});



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})