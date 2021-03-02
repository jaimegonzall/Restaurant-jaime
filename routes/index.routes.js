'use strict';

const { Router } = require('express');
const router = Router();

// Requerimos los controladores y los guardamos en una constante "platoController".
const platoController = require('../controller/plato.controller');

// los GET muestran información al usuario.
// los POST envían información.

// ruta para la página principal
router.get('/', (req, res) => {
    res.render('templates/inicio');
});

router.get('/quienes-somos', (req, res) => {
    res.render('templates/quienes-somos');
});


router.get('/articulo-blog', (req, res) => {
    res.render('templates/articulo-blog', { // determino la plantilla y otros datos variables
        layout: 'post', 
        pageTitle: 'Página de contacto',
        meta: {
            metaTitle:'Página de contacto',
            author: 'Jaime G. Llistó',
            featuredImage: '/img/default-image.jpg',
            tags: ['contacto', 'teléfono', 'email'],
            },
        comments: [ // array de objetos
            { author: 'Lito Yayo', texto: 'Esta sección se ve porque hay comentarios'},
            { author: 'Christian', texto: 'Hay un helper {{if}} que lo muestra'},
            { author: 'Carla', texto: 'Si no hubiera se vería lo hay en el {{else}}'},
            { author: 'Jaime', texto: 'Y luego un bucle {{each}} que los muestra'}
        ] //si no hay comentarios no se muestran, ver layout

    }
    ); 
});

// MOSTRAR los platos

router.get('/carta', platoController.list);

/*  router.get('/carta', async (req, res) => {
    const platos = await platoController.list;
    console.log(platos);
    res.render('templates/carta', {
        pageTitle: 'Lista de platos',
        metaTitle:'Lista de platos',
        listado:platos
    }
    
    );
});   */

router.get('/carta/postres', platoController.postres);

// CREAR PLATO

router.get('/nuevo-plato', (req, res) => {
    res.render('templates/nuevo-plato', {
        pageTitle: 'Nuevo plato',
        metaTitle:'Nuevo plato'
    });
}); 

router.post('/nuevo-plato', platoController.createNewPlato);


module.exports = router;