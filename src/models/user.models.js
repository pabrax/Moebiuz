import mongoose from 'mongoose'

// crea el modelo de usuarios
const userSchema = new mongoose.Schema({

	name:{
		type: String,
		required:true,
		trim:true,
	},

	lastname:{
		type: String,
		required:true,
		trim:true,
	},

	username:{
		type: String,
		required:true,
		trim:true,
	},
	email:{
		type: String,
		required:true,
		trim: true,
		unique:true,	
	},
	password:{
		type: String,
		required:true,
	},

},{
	timestamps:true
	
});
//esta linea me dice como van a ser guardados mis datos en mongo db
export default mongoose.model('User', userSchema)

