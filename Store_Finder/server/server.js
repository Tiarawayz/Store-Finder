const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));

app.use(cors({ origin: "http://localhost:3000",}));
require('./config/mongoose.config');
require('./routes/store.routes')(app);

app.listen(8000, () => console.log(`Listening on port 8000`) );