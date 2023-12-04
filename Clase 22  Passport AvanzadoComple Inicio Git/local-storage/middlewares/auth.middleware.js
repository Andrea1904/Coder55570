import jwt from 'jsonwebtoken';


const SECRET_KEY= 'top-secret-51'
const auth = (req, res, next) => {
  
  const authHeader = req.headers.authorization; // Obtenemos los datos del header
  if (!authHeader) {
    return res.status(401).json({
      error: 'Not authenticated'
    });
  }
  const token = authHeader.split(" ")[1]; // si existe obtenemos el token
   // se divide el espacio [ "bearer "-->posicion 1 y el token ]
  jwt.verify(token, SECRET_KEY, (error, credentials) => { // lo validamos con la librria 
                                                          
    if (error) {
      return res.status(403).json({ error: 'Not authorized'});
    }
    req.user = credentials; // guardamos los datos en el payload 
    next();
  });
};

export default auth