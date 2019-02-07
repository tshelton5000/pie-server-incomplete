require('dotenv').config();
const express = require('express');
const app = express();
const pies = require('./controllers/piecontroller');
const sequelize = require('./db');
const bodyParser = require('body-parser');

sequelize.sync();
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => res.render('index'));

app.use('/pies', pies);

app.listen(process.env.PORT, () => console.log(`App is listening on ${process.env.PORT}`))