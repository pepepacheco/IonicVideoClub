var mongoose = require('mongoose');

var Pelicula = mongoose.model('Peliculas');

exports.listarTodasPeliculas = function(req, res) {
  Pelicula.find({}, function (err, datos){
    if (err) throw err;
    res.json(datos);
  });
};

exports.crearPelicula = function(req, res) {
    var pelicula  = new Pelicula(req.body);
      pelicula.save(function(err, data) {
            if (err)
              res.send(err);
          console.log('Pelicula añadida: ' + pelicula);
          res.status(301).json(data);
      });
};

exports.listarUnaPelicula = function(req, res) {
    Pelicula.find({codigo : req.params.codigo}, function(err, data) {
          if (err)
            res.send(err);
        res.json(data);
          });
};

exports.borrarUnaPelicula = function(req, res) {
    Pelicula.remove({codigo : req.params.codigo
        }, function(err, data) {
              if (err)
            res.send(err);
        res.json({ message: 'Pelicula/s borrada/s correctamente' });
          });
};

exports.actualizarUnaPelicula = function(req, res) {
    Pelicula.update({codigo : req.params.codigo}, req.body, { upsert: true, new: true }, function(err, data) {
          if (err)
            res.send(err);
        res.json(data);
          });
};
