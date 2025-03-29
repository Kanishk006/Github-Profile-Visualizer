import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    console.log("Connecting to MongoDB...");
    const client = await clientPromise;
    console.log("Connected to MongoDB");

    const db = client.db("miniproject");
    const repositoriesCollection = db.collection("repositories");

    const repositories = await repositoriesCollection.find({}).toArray();
    console.log("Fetched Repositories:", repositories);

    return res.status(200).json(repositories);
  } catch (error) {
    console.error("Error fetching repositories:", error);
    return res.status(500).json({ message: "Error fetching repositories", error: error.message });
  }
}
