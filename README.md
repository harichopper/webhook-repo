# webhook-repo

A simple GitHub webhook listener built using Node.js and Express.js for the TechStaX assignment.

## Features

- Listens to GitHub webhook events
- Detects and logs **merged pull requests**
- Ignores duplicate events outside the refresh window

## Setup Instructions

1. Clone the repo and install dependencies:
```bash
npm install

---

### ✅ Bonus Points

This project implements **GitHub Pull Request Webhook handling**, and includes logic to:

- Detect when a Pull Request is **merged**
- Log important details such as:
  - PR Title
  - Author
  - Merge Timestamp
- Prevent duplicate processing using a timestamp check

> This satisfies the **bonus objective** in the TechStaX assignment for handling `pull_request.merged` events. ✅
