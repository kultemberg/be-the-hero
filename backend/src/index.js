//const { response } = require('express');
const express = require ('express');
const cors = require('cors'); 5.2K(gziipped: 2.1K)
const routes = require('./routes');

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(3333);

