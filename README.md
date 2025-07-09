# 🚀 GitHub Webhook Listener

This project is part of the **TechStaX Assignment** and demonstrates a simple implementation of a GitHub webhook listener using **Node.js** and **Express.js**. The webhook server listens for `push` and `pull_request` events from a GitHub repository and logs relevant information, especially when a pull request is **successfully merged**.

---

## 📦 Project Structure

```
webhook-repo/
├── server/
│   └── index.js         # Webhook listener server
├── package.json         # Project dependencies and scripts
└── README.md            # You're reading it now
```

---

## 🛠️ Features

- Listens to GitHub `push` and `pull_request` events
- Logs messages to the console:
  - Pull request title
  - Author (GitHub username)
  - Merge timestamp (only if merged)
- Avoids duplicate logs using a Set to track merged PRs
- Exposes local server via **ngrok** for GitHub webhook testing

---

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/harichopper/webhook-repo.git
cd webhook-repo
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Webhook Server

```bash
npm start
```

Expected output:

```
🚀 Webhook server listening at http://localhost:3000/webhook
```

---

## 🌐 Expose Local Server with ngrok

In a new terminal window:

```bash
npx ngrok http 3000
```

Copy the HTTPS forwarding URL (e.g., `https://abcd1234.ngrok-free.app`).

---

## 🔗 Add Webhook to GitHub Repo

1. Go to your GitHub repository.
2. Navigate to **Settings > Webhooks > Add webhook**
3. Set the following:
   - **Payload URL:** `https://<your-ngrok-subdomain>.ngrok-free.app/webhook`
   - **Content type:** `application/json`
   - **Secret:** _(optional for now)_
   - **Events to send:** Select `Just the push event` and `pull_request`
4. Click **Add webhook**

---

## ✅ Sample Console Output

When you push or merge a PR, your console might log something like:

```
📩 Received GitHub event: push
📩 Received GitHub event: pull_request
✅ Merged PR: "Add login feature" by harichopper on 2025-07-09T10:36:00.000Z
```

---

## 🧪 Test Events

- Create a new **branch** in your repo
- Commit a small change and **push**
- Open a **Pull Request** into `main`
- Click **Merge Pull Request** to test the webhook merge event handling

---

## 📚 Technologies Used

- **Node.js** – JavaScript runtime
- **Express.js** – Web server framework
- **body-parser** – Middleware to parse JSON payloads
- **ngrok** – Public tunnel for local development

---

## 👨‍💻 Developer

- **Name:** Hariharan R
- **GitHub:** [@harichopper](https://github.com/harichopper)
- **Assignment:** TechStaX Webhook Listener (July 2025)

---

## 📄 License

This project is open-source for demonstration purposes only. No specific license applied.

---
