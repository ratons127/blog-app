const User = require('../models/User');
const { signToken } = require('../services/tokenService');

function getCookieOptions() {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 7 * 24 * 60 * 60 * 1000
  };
}

async function register(req, res, next) {
  try {
    const { username, email, password } = req.body;

    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(409).json({ message: 'Email already in use' });
    }

    const user = await User.create({ username, email, password });
    const token = signToken({ id: user._id, role: user.role });

    res.cookie('token', token, getCookieOptions());
    res.status(201).json({
      token,
      user: { id: user._id, username: user.username, email: user.email, role: user.role }
    });
  } catch (err) {
    next(err);
  }
}

async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const matches = await user.comparePassword(password);
    if (!matches) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = signToken({ id: user._id, role: user.role });
    res.cookie('token', token, getCookieOptions());
    res.json({
      token,
      user: { id: user._id, username: user.username, email: user.email, role: user.role }
    });
  } catch (err) {
    next(err);
  }
}

function logout(req, res) {
  res.clearCookie('token');
  res.json({ message: 'Logged out' });
}

function me(req, res) {
  res.json({ user: req.user });
}

module.exports = { register, login, logout, me };
