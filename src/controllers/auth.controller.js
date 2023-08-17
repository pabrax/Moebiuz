//importaciones
import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';


//Bloques de codigo 
export const register = async (req, res) => {
  const {email, password, username} = req.body;
  try {
    const passwordHash = await bcrypt.hash(password,10)

    const newUser = new User({
      username,
      email,
      password: passwordHash,
    });

    const userSaved = await newUser.save();
      //console.log(email, password, username);
      console.log('registrando guiño guiño'); 
      //datos que va a utilizar el fronted ACA VAMOS 
      res.json({
        id: userSaved._id,
        username: userSaved.username,
        email: userSaved.email,
        createdAt: userSaved.
      })
  } catch (error) {
    console.log(error)
  }
};

export const login = (req, res) => { 
  res.send('login') 
};
