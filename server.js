const express = require('express');
const cors = require('cors');
const efu = require('express-fileupload');

const app = express();
const LOCAL_PORT = 3000;

app.use(cors());
app.use(efu());

app.post('/upload',(req, res) => {
    console.log(req.files);
    res.send(req.files);
});

app.listen(LOCAL_PORT, () => {
    console.log('Server listening on port ' + LOCAL_PORT);
})

