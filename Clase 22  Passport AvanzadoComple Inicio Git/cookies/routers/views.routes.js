import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.sendFile(process.cwd() + '/public/login.html')
});

router.get('/profile', (req, res) => {
  res.sendFile(process.cwd() + '/public/profile.html');
});

export default router;