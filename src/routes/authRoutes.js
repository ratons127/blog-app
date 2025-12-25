const express = require('express');
const { body } = require('express-validator');
const { register, login, logout, me } = require('../controllers/authController');
const { validateRequest } = require('../middleware/validate');
const { authMiddleware } = require('../middleware/auth');

const router = express.Router();

router.post(
  '/register',
  [
    body('username').trim().isLength({ min: 3 }),
    body('email').isEmail(),
    body('password').isLength({ min: 6 })
  ],
  validateRequest,
  register
);

router.post('/login', [body('email').isEmail(), body('password').notEmpty()], validateRequest, login);
router.get('/me', authMiddleware, me);
router.post('/logout', authMiddleware, logout);

module.exports = router;
