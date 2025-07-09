import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

let lastProcessedTime = null;

app.post('/webhook', (req, res) => {
  const event = req.headers['x-github-event'];
  const payload = req.body;

  console.log(`📩 Received GitHub event: ${event}`);

  if (event === 'pull_request') {
    console.log(`🧪 Action: ${payload.action}`);
    console.log(`🧪 Merged: ${payload.pull_request?.merged}`);
    console.log(`🧪 Merged_at: ${payload.pull_request?.merged_at}`);
    
    if (payload.action === 'closed' && payload.pull_request.merged) {
      const pr = payload.pull_request;
      const mergedAt = new Date(pr.merged_at);
      console.log(`✅ Merged PR: "${pr.title}" by ${pr.user.login} on ${mergedAt.toISOString()}`);
    }
  }

  res.sendStatus(200);
});



app.listen(PORT, () => {
  console.log(`🚀 Webhook server listening at http://localhost:${PORT}/webhook`);
});
