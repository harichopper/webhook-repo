import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

let lastProcessedTime = null;

app.post('/webhook', (req, res) => {
  const event = req.headers['x-github-event'];
  const payload = req.body;

  console.log(`📩 Received GitHub event: ${event}`); // Add this

  if (event === 'pull_request' && payload.action === 'closed' && payload.pull_request.merged) {
    const pr = payload.pull_request;
    const mergedAt = new Date(pr.merged_at);

    if (!lastProcessedTime || mergedAt > lastProcessedTime) {
      console.log(`✅ Merged PR: "${pr.title}" by ${pr.user.login} on ${mergedAt.toISOString()}`);
      lastProcessedTime = mergedAt;
    }
  }

  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`🚀 Webhook server listening at http://localhost:${PORT}/webhook`);
});
