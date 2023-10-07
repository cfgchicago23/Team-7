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




const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://team7:codeforgoodteam7@cluster0.pwlpav9.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


let x = 2;

if (x == 1) {
  async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      // await client.db("database_name").collection_name.find({field : "10"});
  
      const db = client.db("database_name");
      const coll = db.collection("collection_name");
  
      // find code goes here
      const cursor = coll.find({ 'field': '10' });
      
      // iterate code goes here
      await cursor.forEach(doc => {
        console.log(`field: ${doc.field}`);
      });
  
      // client.db.collection_name.find({field : "10"});
  
  
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
  
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);

}

else {
  async function insertDocument() {
    try {
      // Connect the client to the server (optional starting in v4.7)
      await client.connect();
  
      const db = client.db("database_name");
      const coll = db.collection("collection_name");
  
      // Define the document to be inserted
      const documentToInsert = { field: '5' };
  
      // Insert the document
      await coll.insertOne(documentToInsert);
  
      console.log("Inserted document with field: 5");
  
    } finally {
      // Ensure that the client will close when you finish/error
      await client.close();
    }
  }
  
  insertDocument().catch(console.dir);
  
  
}
