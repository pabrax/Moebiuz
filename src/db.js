import mongoose from 'mongoose';

export const connectDB = async ()=>{
   try{    console.log(db is connect bb);
	   await mongoose.connect('mongodb://localhost/moebiuz')
   }
   catch(error){ 
        console.log(error);
   }


};
