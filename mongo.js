const {MongoClient} = require('mongodb');
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const database = "node-tut";

async function dbConnect(){
    let result = await client.connect();
    let db = result.db(database);
    return db.collection("user");
}

module.exports = dbConnect;