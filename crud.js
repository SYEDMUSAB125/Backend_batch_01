const express = require("express")
const dbConnect = require("./connect")
const mongodb = require("mongodb")
const app = express()
app.use(express.json())

app.get("/",async(req,res)=>{
    const db =await dbConnect()
    const result = await db.find().toArray()
    console.log(result)
    res.send(result)
})

app.post("/post", async(req,res)=>{
    const request = req.body
    console.log(request)
    const result = await dbConnect()
    const data = await result.insertOne(request)
res.send(data)
} )

app.put("/update",async (req,res)=>{
    const result = await dbConnect()
    // const data  = result.updateOne(filter, set)
    const data =await result.updateMany({name:"Galaxy S21"},{$set:{name:"data updated"}})
    res.send(data)
})

app.delete("/delete:id",async(req,res)=>{
    const request = req.params.id
    console.log(request)
    const result =await dbConnect()
    const data = await result.deleteOne({_id: new mongodb.ObjectId(request) })
    console.log(data)
    res.send(data)
})

app.listen(3000)