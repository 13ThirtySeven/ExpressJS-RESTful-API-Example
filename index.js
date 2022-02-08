const express = require('express');

// require flights route
const flights = require('./routes/flights');

const app = express();

// using flights route with the app instance
app.use('/flights', flights);


const port = process.env.port || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));
