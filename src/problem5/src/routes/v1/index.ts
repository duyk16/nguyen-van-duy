import express from 'express';
import userRoute from './user.route';

const router = express.Router();

router.get('/health', (req, res) => {
  res.send('OK');
});

router.use('/users', userRoute);

export default router;
