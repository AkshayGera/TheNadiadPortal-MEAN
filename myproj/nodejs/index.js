const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js')
var registermController = require('./controllers/registermController.js');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200'}));

app.listen(3000,() => console.log('Sever started at port :3000'));


app.use('/register',registermController);
