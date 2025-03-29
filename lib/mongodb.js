import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;  // Load from environment variables
if (!uri) {
  throw new Error("MONGODB_URI is not defined in .env.local");
}

let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri);
  global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

export default clientPromise;
