const express = require('express');


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// add dotenv
require('dotenv').config();

app.use(require('./routes'));
// create a server 
app.listen(process.env.PORT_NUMBER,console.log('server restarted'));