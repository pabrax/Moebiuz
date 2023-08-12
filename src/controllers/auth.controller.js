// estos controladores se encargan de autentificar el registro y el login de un usuario

// ! aun no esta completo, falta el modelo para crear el usuario
export const register = (req, res) => {
  const {email, password, username} = req.body;

  res.send('registrando');
  console.log(email, password, username);
  
};

export const login = (req, res) => { 
  res.send('login') 
};
