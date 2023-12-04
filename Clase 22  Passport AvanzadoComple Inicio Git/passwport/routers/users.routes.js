import { Router } from 'express';
import  authorization  from '../middlewares/auth.middleware.js';
import  {generateToken} from '../utils/utils.js';
import passport from 'passport';
import passportControl from '../middlewares/passport-control.middleware.js';

const authMid =[
  passportControl('jwt',
  authorization('user'))
]

const router = Router();

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (email === 'andrea@gmail.com' && password === '1234') {
    const access_token = generateToken({ email, role: 'user' });
    res.cookie('demopb22', access_token, {
      maxAge: 60*60*1000,
      httpOnly: true,
    });
    res.json({ payload: 'OK' });
  }
});



router.get('/current',authMid , (req, res) => {
  res.json({ payload: req.user });// respondemos al callback si todo salio bien 
});


export default router;