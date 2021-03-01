'use strict';

const Plato = require('../models/plato');

const platoController = {};



platoController.renderPlatos = async (req,res)=>{
    const platos = await Plato.find().lean();
    /* console.log(platos); */
    return platos;
};




platoController.createNewPlato = async (req, res) =>{ 
    let {nombre, comensales, categoria, alergenos, precio, disponibilidad} = req.body; 
    console.log(nombre, comensales, categoria, alergenos, precio, disponibilidad);
    let newPlato = new Plato({nombre, comensales, categoria, alergenos, precio, disponibilidad}); 
    /* console.log(req.body); */
    /* const obj = JSON.parse(JSON.stringify(req.body)); */
    /* console.log(obj); */
    console.log(newPlato);
    await newPlato.save();     
    res.redirect('/nuevo-plato');
    /* res.send('Plato creado') */
};



//EXPORTAMOS
module.exports = platoController;