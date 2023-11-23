const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(express.json());
app.use(morgan('combined'))
app.use(cors());

const PORT = process.env.PORT ?? 8080;

app.get('/status', (req, res) => {
    res.send({
        test: 123
    })
})

app.listen(PORT, () => {
    console.log(`Server started http://localhost:` + PORT);
});