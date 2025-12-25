const Comment = require('../models/Comment');
const Post = require('../models/Post');

async function addComment(req, res, next) {
  try {
    const { content } = req.body;
    const post = await Post.findById(req.params.postId);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    const commentData = {
      post: post._id,
      content
    };

    if (req.user) {
      commentData.author = req.user._id;
    } else {
      const guestName = (req.body.guestName || '').trim();
      if (!guestName) {
        return res.status(400).json({ message: 'Guest name is required' });
      }
      commentData.guestName = guestName;
      if (req.body.guestEmail) {
        commentData.guestEmail = req.body.guestEmail.trim().toLowerCase();
      }
    }

    const comment = await Comment.create(commentData);

    res.status(201).json({ data: comment });
  } catch (err) {
    next(err);
  }
}

async function deleteComment(req, res, next) {
  try {
    const comment = await Comment.findById(req.params.commentId);
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    if (req.user.role !== 'admin' && comment.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Insufficient permissions' });
    }

    await comment.deleteOne();
    res.json({ message: 'Comment deleted' });
  } catch (err) {
    next(err);
  }
}

module.exports = { addComment, deleteComment };
