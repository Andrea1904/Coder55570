import jwt from 'jsonwebtoken';
const SECRET_KEY= 'top-secret-51'

const generateToken = (user) => {
  const token = jwt.sign({ ...user }, SECRET_KEY, { expiresIn: '24h' }); 
  return token;
};

const cookieExtractor = (req) => {
  let token = null;
  if (req && req.cookies) { // si existe la cookie
    token = req.cookies['demopb22'];
  }
  return token;
};

export {generateToken,cookieExtractor}