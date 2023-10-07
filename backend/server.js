const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');

// const serviceAccount = require('./path-to-your-service-account-key.json'); // Replace with your own path

const app = express();
const port = 3001;

// Initialize Firebase Admin SDK
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: 'https://your-firebase-project-id.firebaseio.com' // Replace with your own project URL
// });

// Middleware
app.use(cors());
app.use(express.json());

// Serve your React build
app.use(express.static('path-to-your-react-build-folder'));

// Endpoint to insert username
app.post('/insertUsername', (req, res) => {
  const { username } = req.body;

  // Access the Firebase database
  const db = admin.firestore();
  
  // Add the username to a 'users' collection
  db.collection('users').add({
    username
  })
  .then(() => {
    res.send('Username added to database');
  })
  .catch(error => {
    console.error('Error adding username:', error);
    res.status(500).send('Error adding username to database');
  });
});


const players = [
  { id: 1, name: "Player1", points: 100 },
  { id: 2, name: "Player2", points: 150 },
  { id: 3, name: "Player3", points: 80 },
  { id: 4, name: "Player4", points: 110 },
  { id: 5, name: "Player5", points: 90 },
  { id: 6, name: "Player6", points: 170 },
];

app.get('/leaderboard', (req, res) => {
  const topPlayers = players.sort((a, b) => b.points - a.points).slice(0, 5);
  res.json(topPlayers);
});

// Start server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
