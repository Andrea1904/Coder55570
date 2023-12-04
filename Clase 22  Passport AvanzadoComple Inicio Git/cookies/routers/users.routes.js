import { Router } from 'express';
import  auth  from '../middlewares/auth.middleware.js';
import  generateToken from '../utils/utils.js';

const router = Router();

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (email === 'andrea@gmail.com' && password === '1234') {
    const access_token = generateToken({ email });
    res.cookie('demopb22',access_token,{
      maxAge:60*60*1000,
      httpOnly:true
    });
    res.json({ access_token }); // entrega los datos del acceso
  }
});

router.get('/current', auth, (req, res) => {
  res.json({ payload: req.user });// respondemos al callback si todo salio bien 
});

export default router;