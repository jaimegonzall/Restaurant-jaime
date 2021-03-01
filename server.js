'use strict'

// Requerimos las librerias que necesitamos
const morgan = require('morgan');
const express= require('express');
const exphbs = require ("express-handlebars");
const indexRouter = require('./routes/index.routes'); // requermos las rutas y más abajo las usamos

// configuramos el puerto
const app = express();
const port = 8000;

app.listen(port, console.log(`Escuchando el puerto ${port}`),
console.log(`Conectado a: http://localhost:${port}/`));


// Configuramos el motor de plantillas
        app.engine('hbs', exphbs({
            defaultLayout: 'main',
            layoutsDir: __dirname + '/views/layouts',
            partialsDir: __dirname + '/views/partials',
            extname: 'hbs'
            }));
        app.set('view engine', 'hbs');



app.use(express.static("public"));  // le digo que los archivos estáticos como las imágenes las coja de 'public'
app.use(morgan("dev"));             // le decimos que use morgan y su opción DEV
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(indexRouter); // usamos las rutas; podríamos requerirlas y usarlas a la vez app.use(require('./routes/index.routes'));


module.export = app;