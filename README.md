# PR1 Blog

Full-stack Node.js blog application using Express, MongoDB (Mongoose), JWT authentication, and EJS views. The API is REST-first and can be consumed by any client.

## Why EJS
EJS keeps the stack simple and beginner-friendly: it is server-rendered, requires no frontend build pipeline, and ships pages from the same Express app while still exposing REST APIs for external clients.

## Features
- JWT authentication (register, login, logout)
- Role-based access (admin, user)
- CRUD for blog posts
- Comments on posts
- Image upload for posts
- Pagination and search
- Input validation and centralized error handling
- Secure configuration with dotenv

## Project Structure
```
src/
  app.js
  server.js
  config/
  controllers/
  middleware/
  models/
  routes/
  services/
  utils/
  views/
  public/
.github/workflows/
```

## Local Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy and edit environment variables:
   ```bash
   cp .env.example .env
   ```
3. Start MongoDB locally.
4. Run the server:
   ```bash
   npm run dev
   ```
5. Open `http://localhost:3000`.

## API Endpoints (REST)
- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/logout`
- `GET /api/posts`
- `GET /api/posts/:id`
- `POST /api/posts` (auth)
- `PUT /api/posts/:id` (auth + owner/admin)
- `DELETE /api/posts/:id` (auth + owner/admin)
- `POST /api/posts/:postId/comments` (auth)
- `DELETE /api/comments/:commentId` (auth + owner/admin)

Query params for `GET /api/posts`:
- `page` (default 1)
- `limit` (default 10)
- `q` (search in title/content)

## Auth Notes
- The API returns a JWT and also sets a `token` cookie.
- For API clients, send `Authorization: Bearer <token>`.
- The demo EJS login/register pages store the token in localStorage.

## Production Deployment (PM2 + Nginx)
1. On the server, clone the repo and install dependencies:
   ```bash
   git clone <repo> /var/www/pr1-blog
   cd /var/www/pr1-blog
   npm ci --production
   ```
2. Create `.env` from `.env.example` and set production values.
3. Start with PM2:
   ```bash
   npx pm2 start ecosystem.config.js --env production
   npx pm2 save
   ```
4. Configure Nginx using `deploy/nginx.conf` and reload Nginx.

## GitHub Actions Deployment
See `.github/workflows/deploy.yml`. It:
- installs dependencies
- runs tests
- runs build script
- deploys to your Linux server via SSH and restarts PM2

### Required GitHub Secrets
In your GitHub repo settings > Secrets and variables > Actions:
- `SSH_HOST`: Server IP or hostname
- `SSH_USER`: SSH username
- `SSH_KEY`: Private SSH key (no passphrase)
- `SSH_PORT`: Optional, default 22
- `DEPLOY_PATH`: Server path (example `/var/www/pr1-blog`)

## Security Practices Included
- Helmet for secure headers
- Rate limiting
- Password hashing (bcrypt)
- JWT with HttpOnly cookies
- Input validation with express-validator

## Tests
```bash
npm test
```

## Environment Variables
See `.env.example`.
