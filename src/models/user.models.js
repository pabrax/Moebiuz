import mongoose from 'moongose'


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
})
//esta linea me dice como van a ser guardados mis datos en mongo db
export default moongose.model('User',userSchema)

