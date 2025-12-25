const Post = require('../models/Post');
const Comment = require('../models/Comment');

async function renderHome(req, res, next) {
  try {
    const page = Math.max(Number(req.query.page) || 1, 1);
    const limit = 5;
    const skip = (page - 1) * limit;
    const [posts, total] = await Promise.all([
      Post.find({}).sort({ createdAt: -1 }).skip(skip).limit(limit),
      Post.countDocuments()
    ]);

    res.render('posts/index', {
      posts,
      page,
      pages: Math.ceil(total / limit)
    });
  } catch (err) {
    next(err);
  }
}

async function renderPost(req, res, next) {
  try {
    const post = await Post.findById(req.params.id).populate('author', 'username');
    if (!post) {
      return res.status(404).render('posts/not-found');
    }

    const comments = await Comment.find({ post: post._id })
      .populate('author', 'username')
      .sort({ createdAt: -1 });

    res.render('posts/show', { post, comments });
  } catch (err) {
    next(err);
  }
}

function renderLogin(req, res) {
  res.render('auth/login');
}

function renderRegister(req, res) {
  res.render('auth/register');
}

function renderCreatePost(req, res) {
  res.render('posts/create');
}

module.exports = { renderHome, renderPost, renderLogin, renderRegister, renderCreatePost };
