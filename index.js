const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.g02ycwa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

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

    const groupCollection = client.db('groupDB').collection('group')
    // All group
    // app.get('/group/all',async(req,res)=>{ 
    //   const result= await groupCollection.find().toArray();
    //   res.send(result)
    // })

    app.get('/group/all', async (req, res) => {
      try {
        // Query parameters 
        const { category, sortOrder } = req.query;
        let filter = {};
        if (category) {
          filter.Category = category;
        }
        let sort = {};
        if (sortOrder) {
          sort.date = sortOrder === 'asc' ? 1 : -1; // 1 = ascending, -1 = descending
        } 
        const result = await groupCollection.find(filter).sort(sort).toArray();
        res.send(result);
      } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Something went wrong' });
      }
    });

    // letest group
    app.get('/group/latest', async (req, res) => {
      const sortField = { date: - 1 }
      const result = await groupCollection.find().sort(sortField).limit(6).toArray()
      res.send(result)
    })
    // My group
    app.get('/group/email/:email', async (req, res) => {
      const email = req.params.email;
      const query = { email: email };
      const result = await groupCollection.find(query).toArray();
      res.send(result)
    })
    //  group details
    app.get('/group/id/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const result = await groupCollection.findOne(query);
      res.send(result)
    })
    //  post in DB
    app.post('/group', async (req, res) => {
      const groupData = req.body;
      console.log(groupData)
      const result = await groupCollection.insertOne(groupData);
      res.send(result)
    })
    // update group
    app.put('/group/id/:id', async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const update = req.body
      const options = { upsert: true };
      const updateGroup = {
        $set: update
      }
      const result = await groupCollection.updateOne(filter, updateGroup, options)
      res.send(result)
    })
    // detete from DB
    app.delete('/group/id/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await groupCollection.deleteOne(query)
      res.send(result)
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
  res.send('Your server ready to atteck')
})

app.listen(port, () => {
  console.log(`Server running from port :${port}`)
})

