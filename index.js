import express from 'express';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 3000;  // Use the port from .env or default to 3000

// Root route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Jokes route
app.get('/jokes', (req, res) => {
  const jokes = [
    {
      "id": 1,
      "joke": "Why don't scientists trust atoms? Because they make up everything!"
    },
    {
      "id": 2,
      "joke": "Why did the scarecrow win an award? Because he was outstanding in his field!"
    },
    {
      "id": 3,
      "joke": "Why don't skeletons fight each other? They don't have the guts."
    },
    {
      "id": 4,
      "joke": "What do you call fake spaghetti? An impasta!"
    },
    {
      "id": 5,
      "joke": "Why did the bicycle fall over? Because it was two-tired!"
    }
  ];
  res.send(jokes);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
