const express = require('express');
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;

require('dotenv').config()

// middleware
app.use(cors());
app.use(express.json()) // parse requests of content-type - application/json


// mongo config
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.vuehb1f.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // database & collection
    const menuCollections = client.db("Foodie-foodOrderingApp").collection("menus");
    const cartCollection = client.db("Foodie-foodOrderingApp").collection("cartItems");

    // all menu items operation
    app.get('/menu', async(req, res) => {
      const result = await menuCollections.find().toArray();
      res.send(result);
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});