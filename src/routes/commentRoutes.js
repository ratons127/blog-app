const express = require('express');
const { body } = require('express-validator');
const { addComment, deleteComment } = require('../controllers/commentController');
const { authMiddleware, optionalAuth } = require('../middleware/auth');
const { validateRequest } = require('../middleware/validate');

const router = express.Router();

router.post(
  '/posts/:postId/comments',
  optionalAuth,
  [
    body('content').trim().notEmpty(),
    body('guestName')
      .optional({ checkFalsy: true })
      .isLength({ min: 2 })
      .withMessage('Guest name must be at least 2 characters'),
    body('guestEmail').optional({ checkFalsy: true }).isEmail().withMessage('Invalid email')
  ],
  validateRequest,
  addComment
);

router.delete('/comments/:commentId', authMiddleware, deleteComment);

module.exports = router;
