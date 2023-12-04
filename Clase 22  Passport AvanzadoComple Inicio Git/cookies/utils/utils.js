import jwt from 'jsonwebtoken';
const SECRET_KEY= 'top-secret-51'

const generateToken = (user) => {
  const token = jwt.sign({ ...user }, SECRET_KEY, { expiresIn: '24h' });  // guardamos las propiedades internas 
  return token;
};

 
export default generateToken