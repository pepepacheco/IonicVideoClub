var cors = require('cors')
var express = require('express'),
  videoclub = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Pelicula = require('./modelo/peliculaModelo'), //created model loading here
  bodyParser = require('body-parser');

videoclub.use(cors())

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/videoclub');

videoclub.use(bodyParser.urlencoded({ extended: true }));
videoclub.use(bodyParser.json());

var routes = require('./rutas/peliculaRuta'); //importing route
routes(videoclub); //register the route

videoclub.listen(port);

console.log('todo list RESTful API server started on: ' + port);
