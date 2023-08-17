import mongoose from 'mongoose';

export const connectDB = async () =>{
   try{    
      await mongoose.connect('mongodb+srv://admin:moebiuz123@moebiuz.zj2ifg6.mongodb.net/?retryWrites=true&w=majority')
      console.log("funciona :D");

   }
   catch(error){ 
        console.log(error);
   }


};
