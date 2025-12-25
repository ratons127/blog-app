
• Here’s a clean, beginner‑friendly deployment guide for Ubuntu with MongoDB configured.

  1) Provision the server

  sudo apt update
  sudo apt install -y git nginx

  2) Install Node.js 20

  curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
  sudo apt install -y nodejs

  3) Install MongoDB
  Option A: MongoDB Community (local DB)

  curl -fsSL https://pgp.mongodb.com/server-7.0.asc | sudo gpg -o /usr/share/keyrings/mongodb-server.gpg --dearmor
  echo "deb [signed-by=/usr/share/keyrings/mongodb-server.gpg] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0
  multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
  sudo apt update
  sudo apt install -y mongodb-org
  sudo systemctl enable --now mongod

  Verify:

  mongosh

  4) Create DB user
  In mongosh:

  use admin
  db.createUser({ user: "blogadmin", pwd: "strongpassword", roles: [ { role: "userAdminAnyDatabase", db: "admin" },
  { role: "readWriteAnyDatabase", db: "admin" } ] })

  Enable auth (optional but recommended):

  sudo nano /etc/mongod.conf
  # add or ensure:
  security:
    authorization: enabled

  sudo systemctl restart mongod

  5) Deploy app

  sudo mkdir -p /var/www/pr1-blog
  sudo chown $USER:$USER /var/www/pr1-blog
  git clone <your-repo-url> /var/www/pr1-blog
  cd /var/www/pr1-blog
  cp .env.example .env

  Edit .env:

  PORT=3000
  MONGO_URI=mongodb://blogadmin:strongpassword@127.0.0.1:27017/pr1_blog?authSource=admin
  JWT_SECRET=your_production_secret
  NODE_ENV=production

  Install:

  npm ci --production

  6) Run with PM2

  sudo npm i -g pm2
  pm2 start ecosystem.config.js --env production
  pm2 save
  pm2 startup

  7) Nginx reverse proxy

  sudo nano /etc/nginx/sites-available/pr1-blog

  Paste:

  server {
    listen 80;
    server_name yourdomain.com;

    client_max_body_size 10M;

    location / {
      proxy_pass http://127.0.0.1:3000;
      proxy_http_version 1.1;
      proxy_set_header Upgrade $http_upgrade;
      proxy_set_header Connection "upgrade";
      proxy_set_header Host $host;
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
  }

  Enable and reload:

  sudo ln -s /etc/nginx/sites-available/pr1-blog /etc/nginx/sites-enabled/pr1-blog
  sudo nginx -t
  sudo systemctl reload nginx

  8) (Optional) HTTPS

  sudo apt install -y certbot python3-certbot-nginx
  sudo certbot --nginx -d yourdomain.com

  If you want, I can tailor these steps to your exact Ubuntu version and domain, or configure MongoDB Atlas instead of
  local MongoDB.