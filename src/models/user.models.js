import mongoose from 'mongoose'


const userSchema = new mongoose.Schema({
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
		requiered:true,
	}
},{
	timestamps:true
	
});
//esta linea me dice como van a ser guardados mis datos en mongo db
export default mongoose.model('User', userSchema)

