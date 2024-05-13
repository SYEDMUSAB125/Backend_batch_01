const express = require("express");
const app = express();
const path = require ("path")
const current = path.join(__dirname,"public")
app.set("view engine","ejs")
app.use(express.static("public"))
app.get("/",(req,res)=>{
    const name = req.query.name;
res.send(`welcome ${name}`)
})
app.get("/about",(_,res)=>{
 
res.send("Welcome to homescreen" )
})
// app.get("/contact",(_,res)=>{
//     const user = {
//         name:"Musab",
//         age: 21,
//         email:"syedmasab125@gmail.com"
//     }
//     res.render("home",{user})
// })
// multi line ejs
app.get("/contact",(_,res)=>{
    const user = [
        "Musab",
         21,
        "syedmasab125@gmail.com"
]
    res.render("home",{user})
})

















app.get( "*" ,(_,res)=>{
    res.sendFile(`${current}/404.html`)
})
app.listen(4000)