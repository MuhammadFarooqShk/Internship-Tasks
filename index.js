const dbConnect = require('./mongo');

const displayData = async () => {
    let result = await dbConnect();
    result = await result.find().toArray();
    console.log(result);
};

displayData();

// const {MongoClient}  =require('mongodb');
// const url = "mongodb://localhost:27017";
// const client = new MongoClient(url);
// const database = "node-tut";

// async function getData(){
//     let result = await client.connect();
//     let db = result.db(database);
//     let collection = db.collection("user");
//     let response = await collection.find({}).toArray();
//     console.log(response);
// }

// getData();



// const http = require('http');
// http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'application\json'});
//     res.write(JSON.stringify({name:'Ali',age:'18'}));
//     res.end()
// }).listen(4500);
// let a = 20;

// let waitingdata = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(30);
//     },2000)
// });

// waitingdata.then((data)=>{
//     console.log(a+data);
// });


// const app = require('./app');
// console.log(app.f1());
// console.log(app.x + app.y);