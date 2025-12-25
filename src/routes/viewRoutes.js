const express = require('express');
const {
  renderHome,
  renderPost,
  renderLogin,
  renderRegister,
  renderCreatePost
} = require('../controllers/viewController');

const router = express.Router();

router.get('/', renderHome);
router.get('/posts/new', renderCreatePost);
router.get('/posts/:id', renderPost);
router.get('/login', renderLogin);
router.get('/register', renderRegister);

module.exports = router;
