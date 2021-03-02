'use strict';

const Plato = require('../models/plato');

const platoController = {};




// LISTA DE PLATOS
platoController.list = async (req,res)=>{
    const platos = await Plato.find({}).lean();
    res.render('templates/carta',{
        listado:platos,  // ¿qué es esto?
        pageTitle: 'Lista de platos',
        metaTitle:'Lista de platos'
        // console.log(platos); // si quiero ver todo lo que está recibiendo la web
        });
    };
    

// LISTA DE POSTRES
platoController.postres = async (req,res)=>{ //filtrando por categoría
        const platos = await Plato.find({categoria:'Postres'}).lean();
        res.render('templates/postres',{
            layout: 'main', // no pilla el layout
            listado:platos,
            pageTitle: 'Lista de postres',
            metaTitle:'Lista de postres'
            });
        };


// NUEVO PLATO
platoController.createNewPlato = async (req, res) =>{ 
    let {nombre, comensales, categoria, alergenos, precio, disponibilidad} = req.body; 
    /* console.log(nombre, comensales, categoria, alergenos, precio, disponibilidad); // para ver que lo recojo*/
    let newPlato = new Plato({nombre, comensales, categoria, alergenos, precio, disponibilidad}); 
    /* console.log(req.body); // me ofrece lo que mando por el navegador */
    /* const obj = JSON.parse(JSON.stringify(req.body)); */
    /* console.log(obj); // me ofrece el objeto que mando por el navegador */
    console.log(newPlato); // me ofrece lo que he enviado y guardado en la BDD
    await newPlato.save();     
    res.redirect('/nuevo-plato');
    //res.render('/nuevo-plato',{listado:newPlato});
    //res.send('Plato creado')
};


// ELIMINAR PLATO
platoController.deletePlato = async (req,res) => { // En este caso creamos una funcion asíncrona "async"
    await Plato.findByIdAndDelete(req.params.id) //  Usamos un metodo de mongo para buscar ID y borrar, le decimos que busque por un id https://docs.mongodb.com/manual/reference/method/js-collection/
    res.send('Plato Borrado') //Le decimos que nos muestre en pantalla 'Libro borrado'
};




//EXPORTAMOS
module.exports = platoController;