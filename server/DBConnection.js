import { MongoClient, ServerApiVersion }  from 'mongodb' ;
import { config } from 'dotenv';

config()

const url = process.env.DB_URL
const client = new MongoClient(url);

let db;

export default async function connectToDB(){
 if (db) return db;
  try {
    await client.connect();
    db = client.db(process.env.DB_NAME);
    console.log("successfully connected to MongoDB!");
    return db;                                                       // try move the return to outside the try scope
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    throw error;
  }
}

