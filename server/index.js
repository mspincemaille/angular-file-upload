const express = require('express');
const cors = require('cors');
const multer = require('multer');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('uploads'));

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "uploads");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

var upload = multer({ storage: storage });

app.post('/upload', (req, res) => {
    console.log(req.body)
    res.send(req.body);
});

app.listen(3000, () => {
    console.log("App is listening on port 3000");
});