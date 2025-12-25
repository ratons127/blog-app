const express = require('express');
const path = require('path');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const cookieParser = require('cookie-parser');

const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');
const viewRoutes = require('./routes/viewRoutes');
const { notFoundHandler } = require('./middleware/notFound');
const { errorHandler } = require('./middleware/errorHandler');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const corsOrigin = process.env.CORS_ORIGIN;
app.use(cors(corsOrigin ? { origin: corsOrigin.split(','), credentials: true } : {}));
app.use(helmet());
app.use(morgan('dev'));
// Basic abuse protection for public APIs.
app.use(rateLimit({
  windowMs: Number(process.env.RATE_LIMIT_WINDOW || 15) * 60 * 1000,
  max: Number(process.env.RATE_LIMIT_MAX || 100),
  standardHeaders: true,
  legacyHeaders: false
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Static assets and uploaded images.
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/', viewRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api', commentRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
