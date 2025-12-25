const Post = require('../models/Post');
const Comment = require('../models/Comment');

function buildQuery(search) {
  if (!search) return {};
  const regex = new RegExp(search, 'i');
  return { $or: [{ title: regex }, { content: regex }] };
}

async function listPosts(req, res, next) {
  try {
    const page = Math.max(Number(req.query.page) || 1, 1);
    const limit = Math.min(Number(req.query.limit) || 10, 50);
    const search = req.query.q;
    const query = buildQuery(search);
    const skip = (page - 1) * limit;

    const [posts, total] = await Promise.all([
      Post.find(query)
        .populate('author', 'username role')
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit),
      Post.countDocuments(query)
    ]);

    res.json({
      data: posts,
      meta: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (err) {
    next(err);
  }
}

async function getPost(req, res, next) {
  try {
    const post = await Post.findById(req.params.id).populate('author', 'username role');
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    const comments = await Comment.find({ post: post._id })
      .populate('author', 'username')
      .sort({ createdAt: -1 });

    res.json({ data: post, comments });
  } catch (err) {
    next(err);
  }
}

async function createPost(req, res, next) {
  try {
    const { title, content } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : undefined;

    const post = await Post.create({
      title,
      content,
      imageUrl,
      author: req.user._id
    });

    res.status(201).json({ data: post });
  } catch (err) {
    next(err);
  }
}

function canModify(user, post) {
  return user.role === 'admin' || post.author.toString() === user._id.toString();
}

async function updatePost(req, res, next) {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    if (!canModify(req.user, post)) {
      return res.status(403).json({ message: 'Insufficient permissions' });
    }

    const { title, content } = req.body;
    if (title) post.title = title;
    if (content) post.content = content;
    if (req.file) post.imageUrl = `/uploads/${req.file.filename}`;

    await post.save();
    res.json({ data: post });
  } catch (err) {
    next(err);
  }
}

async function deletePost(req, res, next) {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    if (!canModify(req.user, post)) {
      return res.status(403).json({ message: 'Insufficient permissions' });
    }

    await Comment.deleteMany({ post: post._id });
    await post.deleteOne();

    res.json({ message: 'Post deleted' });
  } catch (err) {
    next(err);
  }
}

module.exports = { listPosts, getPost, createPost, updatePost, deletePost };
