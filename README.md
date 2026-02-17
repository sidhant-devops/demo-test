# Demo Application
# Demo Application
Sample application for testing the AI Deployment Platform.

## 🚀 Quick Start

### 1. Create GitHub Repository
### 1. Create GitHub Repository
```bash
# Create a new repository on GitHub (e.g., "demo-app")
# Then initialize and push:
```

### 2. Initialize Git and Push
### 2. Initialize Git and Push
```bash
git init
git add .
git commit -m "Initial commit - Demo app for AI deployment platform"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/demo-app.git
git push -u origin main
```

### 3. Configure Webhook
### 3. Configure Webhook

1. Go to your repository on GitHub
2. Settings → Webhooks → Add webhook
3. Payload URL: `http://YOUR-SERVER-IP:8001/webhooks/github`
4. Content type: `application/json`
5. Events: Just the `push` event
6. Save

### 4. Push Code and Watch!
### 4. Push Code and Watch!

```bash
# Make a change
echo "// Updated" >> index.js
git add .
git commit -m "Test deployment"
git push origin main
```

### 5. Access Your App

After deployment, access at:
```
http://demo-app.local
```

## 📋 Endpoints

- `GET /` - Main endpoint with app info
- `GET /health` - Health check endpoint
- `GET /info` - System information

## 🐳 Docker

**No Dockerfile needed!** The deployment platform will automatically:
- **Detect your language/framework**
- **Auto-generate Dockerfile** based on analysis
- Build the Docker image
- Push to local registry
- Deploy container
- Configure Nginx
- Configure /etc/hosts

## ✅ What Happens When You Push

1. GitHub sends webhook to your server
2. Server clones repo to `/tmp/local-deployments/demo-app`
3. Analyzes code (detects Node.js, port 3000)
4. Builds Docker image
5. Deploys container
6. Configures Nginx
7. Configures /etc/hosts
8. Site accessible at `http://demo-app.local`

## 🧪 Test Locally

```bash
# Install dependencies
npm install

# Run locally
npm start

# Test
curl http://localhost:3000
curl http://localhost:3000/health
```

## 📝 Notes

- Port: 3000 (default)
- Framework: Express.js
- Node.js version: 18
- Auto-detected by the platform
