require('dotenv').config();

const express = require('express');
const cors = require('cors');

// library for reading multipart data eg files
const efu = require('express-fileupload');

const app = express();
const LOCAL_PORT = process.env.LOCAL_PORT;

// mongodb setup
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL + 'files', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => console.error('database error:', error));
db.once('open', () => { console.log('Connected to database')});

// server injections
app.use(cors());
app.use(efu());

app.post('/upload',(req, res) => {
    console.log(req.files);
    res.send(req.files);
});

app.listen(LOCAL_PORT, () => {
    console.log('Server listening on port ' + LOCAL_PORT);
})

