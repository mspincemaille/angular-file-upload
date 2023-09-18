const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.post('/upload',(req, res) => {
    console.log(req.body);
});

app.listen(PORT, () => {
    console.log('Server listening on port ' + PORT);
})

