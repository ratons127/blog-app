const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    content: { type: String, required: true },
    imageUrl: { type: String },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
  },
  { timestamps: true }
);

PostSchema.index({ title: 'text', content: 'text' });

module.exports = mongoose.model('Post', PostSchema);
