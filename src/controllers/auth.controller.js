//importaciones
import User from "../models/user.models.js";
import bcrypt from 'bcryptjs';
import { createAccessToken } from "../libs/jwt.js";
import {rutaAbsoluta} from "../config.js"

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
    const token = await createAccessToken({id: userSaved._id})
    res.cookie("token",token );
    res.json({
         id: userSaved._id,
         username: userSaved.username,
         email: userSaved.email,
         createdAt: userSaved.createdAt,
         updatedAt: userSaved.updatedAt,
         
    });
    console.log('usuario registrando...');   
  } catch (error) {
    res.status(500).json({message:error.message});
  }
};

export const login = async (req, res) => {
  const {email, password} = req.body;
  try {

    const userFound = await User.findOne({email});
    //si no encuentra un usuario a la hora de buscar el usuario se le devuelve un error 400
    if(!userFound) return res.status(400).json({mesagge: "Usuario no encontrado, por favor verifica C:"});

    //constante que guarda la contraseña si coincide
    const isMatch = await bcrypt.compare(password, userFound.password);
    
    if(!isMatch) return res.status(400).json({mesagge: "Contraseña no encontrada, por favor verifica C:"});  

    const token = await createAccessToken({id: userFound._id})
    res.cookie("token",token );
    res.json({
         id: userFound._id,
         username: userFound.username,
         email: userFound.email,
         createdAt: userFound.createdAt,
         updatedAt: userFound.updatedAt,
         
    });
    console.log('usuario registrando...');   
  } catch (error) {
    res.status(500).json({message:error.message});
  }
};
export const logout = (req, res)=>{
  res.cookie('token',"",{
    expire: new Date(0)
  });
  return res.sendStatus(200); 
};

export const profile = async(req, res) => {
  const userFound = await User.findById(req.user.id)
  if(!userFound) return res.status(400).json({message:"Usuario no encontrado"});
  res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
        createdAt: userFound.createdAt,
        updatedAt: userFound.updatedAt,

  })
  res.send('profile')
};

export const loginPage = (req, res) => {
  res.sendFile(rutaAbsoluta)
}