const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
const port = 3000;
const cors = require("cors");
app.use(cors());

const uri =
  "mongodb+srv://parvejshahlabib007:bAsNONsEHNcaBbHY@newcluster.n9akf.mongodb.net/?retryWrites=true&w=majority&appName=newCluster";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
    const menuCollection = client.db("bistroBossDb").collection("menu");
    // get menu
    app.get("/menu", async (req, res) => {
    const { category } = req.query;
      let query;
      if(category)
        query = { category };
      const menu = await menuCollection.find(query).toArray();
      res.send(menu);
    });
    
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Bistro Boss is cooking");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
