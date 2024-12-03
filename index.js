require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT;
const uri = process.env.URI;
//nSeVvwDjGUoKKiOE
//Rifat
app.use(cors());

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const database = client.db("Crowdcube");
    const collection = database.collection("test");
    // const result = await collection.insertOne({
    //   name: "reee",
    //   email: "john@example.com",
    // });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}
run().catch(console.dir);

app.get("/", async (req, res) => {
  try {
    const query = {
      _id: new ObjectId("674f107e92873ecc896b96ba"),
    };

    const collection = client.db("Crowdcube").collection("test");

    const result = await collection.findOne(query);

    // If no result found, return a 404 error
    if (!result) {
      return res.status(404).send("Document not foasddasund.");
    }

    // Return the found document as JSON
    res.json(result);
  } catch (error) {
    console.error("Error querying database:", error);
    res.status(500).send("Internal Server Error");
  }
});
// app.get("/", (req, res) => {
//   res.send("sdsd sdsaaaaaa");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
