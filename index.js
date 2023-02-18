const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const fresher = require('./data/fresher.json');
const experienced = require('./data/experienced.json');
const top = require('./data/TopIt.json');


app.get('/', (req, res) => {
    res.send('server is running');
})

app.get('/fresher', (req, res) => {
    res.send(fresher);
})

app.get('/experienced', (req, res) => {
    res.send(experienced);
})

app.get('/top', (req, res) => {
    res.send(top);
})





app.listen(port, () => {
    console.log('server is running on port - ', port);
})
