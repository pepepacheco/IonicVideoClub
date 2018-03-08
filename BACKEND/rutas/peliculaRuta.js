module.exports = function(videoclub) {
  var peliculas = require('../controlador/peliculaControlador');

  videoclub.route('/peliculas')
    .get(peliculas.listarTodasPeliculas)
    .post(peliculas.crearPelicula);

  videoclub.route('/peliculas/:codigo')
    .get(peliculas.borrarUnaPelicula)
    .delete(peliculas.borrarUnaPelicula)
    .put(peliculas.actualizarUnaPelicula);
}
