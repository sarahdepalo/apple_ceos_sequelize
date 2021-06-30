'use strict';

const http = require('http');
const port = 3000;
const hostname = '127.0.0.1';

const express = require('express');
const app = express();

const helmet = require('helmet');
app.use(helmet());

const morgan = require('morgan');
const logger = morgan('tiny');
app.use(logger); // Gives us extra logging capability for debugging!

// Need these two lines to read the req body from a form. These are know as middleware.
app.use(express.json()); 
app.use(express.urlencoded({ extended: false })); 

app.use(express.static('public')) //Tells express to look in the public folder for any static assests: images, css, front-end JS

const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', './views');
app.set('view engine', 'html');

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server is running on http://${hostname}:${port}`)
});

const rootController = require('./routes/index')

app.use('/', rootController);