import { MongoClient } from "mongodb";

const MONGO_URI = process.env.MONGODB_URI;
console.log(MONGO_URI)

if (!MONGO_URI) {
  console.error("❌ MONGO_URI is missing in .env file!");
  process.exit(1);
}

let client, db, usersCollection;

// ✅ Connect to MongoDB
async function connectToDB() {
  if (!client) {
    try {
      client = new MongoClient(MONGO_URI);
      await client.connect();
      db = client.db("miniproject");
      usersCollection = db.collection("users");
      console.log("✅ Connected to MongoDB");
    } catch (error) {
      console.error("❌ Error connecting to MongoDB:", error);
      process.exit(1);
    }
  }
}


export default async function searchHandler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  await connectToDB();

  try {
    const { username } = req.query;
    console.log(username)
    const user = await usersCollection.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("❌ Error fetching user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
