const express = require('express');
const cors = require('cors');
const cardsRouter = require('./routers/cards');

require("./script/TransferCards")

const app = express();

app.use(express.json());
// app.use('/static', express.static('public'))

app.use("/cards", cardsRouter)

app.use(cors());
app.set('trust proxy', true)

// app.use(cardsRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server up on port ${PORT}`))