import jwt from 'jsonwebtoken';

const SECRET_KEY= 'top-secret-51'

const auth = (role) => {  
  return async (req,res, next)=>{
    if(!req.user){
      return res.status(401).json({error:"No Authenticated"})
    }
    if(req.user.role !==role){
      return res.status(403).json({error:"Access Denied"})
    }
    next();
  }
};
export default auth