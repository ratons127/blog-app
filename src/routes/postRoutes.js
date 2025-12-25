const express = require('express');
const { body } = require('express-validator');
const {
  listPosts,
  getPost,
  createPost,
  updatePost,
  deletePost
} = require('../controllers/postController');
const { authMiddleware } = require('../middleware/auth');
const { validateRequest } = require('../middleware/validate');
const { upload } = require('../middleware/upload');

const router = express.Router();

router.get('/', listPosts);
router.get('/:id', getPost);

router.post(
  '/',
  authMiddleware,
  upload.single('image'),
  [body('title').trim().notEmpty(), body('content').trim().notEmpty()],
  validateRequest,
  createPost
);

router.put(
  '/:id',
  authMiddleware,
  upload.single('image'),
  [body('title').optional().trim().notEmpty(), body('content').optional().trim().notEmpty()],
  validateRequest,
  updatePost
);

router.delete('/:id', authMiddleware, deletePost);

module.exports = router;
