// Requerimos "mongoose" y lo desestructuramos {} para sacar "Schema" y "model". 
const {Schema, model} = require('mongoose');

// Creamos un "new Schema" y lo guardamos en una constante bookSchema.
//Aqui dentro escribimos los parametros que va a tener nuestro libro en la base de datos.
const platoSchema = new Schema({
	nombre: {
		type: String,
		unique: true,  // campo único y mensaje de error
		required: [true, 'Necesitas intriducir un nombre']
	},
	comensales: {
		type: Number,
		default: 1,
		min: [1, 'Almenos ha de ser para una persona'],
		max: [4, 'Ya son bastantes']
	},
	categoria: {
		type: String /* ,
		enum: ['Platos de cuchara', 'Tapas', 'Carnes', 'Postres'], */
	},
	alergenos: {
		type: Array /*,
		enum: ['gluten', 'frutos de cáscara', 'crustáceos', 'apio', 'huevo', 'mostaza', 'pescado', 'sésamo', 'cacahuetes', 'sulfitos', 'soja', 'altramuces', 'lácteos', 'moluscos']*/
	},
	precio: {
		type: Number,
		default: 0,
		required: [true, 'Algo tendrá que costar']
	},
	disponibilidad: {
		type: Boolean,
		default: false,
	}
});

module.exports = model('Plato', platoSchema, "listaPlatos");
// el 3º es el nombre de la colección de la bd a la que irán los platos