'use strict';

//CONECTO LA DATA BASE
const mongoose = require('mongoose');
const MONGODB = 'mongodb://localhost/Restaurante';
                // estoy llamando a una bdd que tengo en local en mi mongoose

mongoose.connect(MONGODB, {         // Conectamos con la base de datos y le pasamos como parametro MONGODB.
    useNewUrlParser: true,          // Configuramos unos parametros para que en la terminal no nos salgan los !DeprecationWarning!
    useUnifiedTopology: true,       // Estos parametros de !DeprecationWarning!
    useCreateIndex: true,           // no me los invento estan todos en la documentación de MOONGOSE.
    useFindAndModify: false,        // https://mongoosejs.com/docs/deprecations.html
});
const db = mongoose.connection;
// Con esto nos dice que estamos conectados a la BD
//cuando haya error que haga un console.log
db.on('error', console.error.bind(console, 'connection error:'));

// la primera vez que se abra la bd se hará esta función
// esto será que funciona
db.once('open', function() {
console.log("Conectado a MongoDB")
});


module.export = mongoose;


