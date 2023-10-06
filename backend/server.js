// const express = require('express');
// const cors = require('cors');
// const admin = require('firebase-admin');

// // const serviceAccount = require('./path-to-your-service-account-key.json'); // Replace with your own path

// const app = express();
// const port = 3001;

// Initialize Firebase Admin SDK
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: 'https://your-firebase-project-id.firebaseio.com' // Replace with your own project URL
// });

// Middleware
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001; // You can choose any available port

app.use(cors());
app.use(express.json());

// Endpoint to receive message from client
app.post('/sendMessage', (req, res) => {
  const { message } = req.body;
  console.log('Received message:', message);
  res.send('Message received by server: ' + message);
});

// Start server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
