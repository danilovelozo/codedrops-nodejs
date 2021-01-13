const express = require('express');
const cors = require('cors');
const app = express();

const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://root:<12345>@cluster0.mdtyi.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

app.use(cors());
app.use(express.json());

require('./src/routes/index')(app);

app.listen(3333);