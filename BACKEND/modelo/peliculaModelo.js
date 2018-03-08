var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

var userSchema  = new Schema ({

  codigo      : {type : Number, unique : true, require : true},
  foto        : String,
  titulo      : {type : String, require : true},
  director    : String,
  precio      : {type : Number, require : true},
  anio        : {type : Number, require : true},
  stock       : {type : Number, require : true},
  descripcion : String

});

var Pelicula    = mongoose.model('Peliculas', userSchema);
module.exports  = Pelicula;
