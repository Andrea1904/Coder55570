import jwt from 'jsonwebtoken';

const SECRET_KEY= 'top-secret-51'
const auth = (req, res, next) => {

  
  const token = req.cookies['demopb22'];
  if (!token) {
    return res.status(401).json({
      error: 'Not authenticated'
    });
  }
  jwt.verify(token, SECRET_KEY, (error, credentials) => {
    if (error) {
      return res.status(403).json({ error: 'Not authorized'});
    }
    req.user = credentials;
    next();
  });
};
export default auth