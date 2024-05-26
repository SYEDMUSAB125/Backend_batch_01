const {MongoClient} = require("mongodb")
const url = "mongodb://localhost:27017"
const DataBase = "amazon"
const Client = new MongoClient(url)
const dbConnect = async ()=>{
    let result = await  Client.connect()
    let db = result.db(DataBase)
    return db.collection("products")
}
module.exports = dbConnect