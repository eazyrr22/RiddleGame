import connectToDB from '../DBConnection.js';
import { ObjectId } from "mongodb";


const collection = process.env.DB_COLLECTION;

export async function addItem(data) {
    const db = await connectToDB();
    const result = await db.collection(collection).insertOne(data);
    return result.insertedId;
}

export async function getItemById(id) {
    const db = await connectToDB();
    return db.collection(collection).findOne({ _id: new ObjectId(id) });
}

export async function getAllData() {
    return db = await connectToDB()
    .collection(collection)
    .find({})
    .toArray();
}

export async function updateItem(itemId, newData) {
    const db = await connectToDB();
    const result = await db.collection(collection)
    .updateOne(
        { _id: new ObjectId(itemId) },
        { $set: newData }
    );
    return result.modifiedCount > 0;
}

export async function deleteItem(itemId) {
    const db = await connectToDB();
        const result = await db.collection(collection).deleteOne({ _id: new ObjectId(itemId) });
        return result.deletedCount;
    }

