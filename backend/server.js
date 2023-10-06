const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

// Middleware
app.use(cors());  // Enable CORS for all routes
app.use(express.json());  // Parse JSON request bodies

// Serve your React build
app.use(express.static('path-to-your-react-build-folder'));

// Start server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
