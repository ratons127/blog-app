const jwt = require('jsonwebtoken');
const User = require('../models/User');

async function authMiddleware(req, res, next) {
  try {
    const header = req.headers.authorization || '';
    // Accept token from Authorization header or HttpOnly cookie.
    const token = req.cookies.token || header.replace('Bearer ', '');

    if (!token) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(payload.id).select('-password');

    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
}

async function optionalAuth(req, res, next) {
  try {
    const header = req.headers.authorization || '';
    const token = req.cookies.token || header.replace('Bearer ', '');
    if (!token) {
      return next();
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(payload.id).select('-password');
    if (user) {
      req.user = user;
    }
    return next();
  } catch (err) {
    return next();
  }
}

module.exports = { authMiddleware, optionalAuth };
