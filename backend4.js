const express = require("express")
const app = express()
const path = require ("path")
const current = path.join(__dirname,"public")
app.use(express.static("public"))

// app.get("/",(req,res)=>{
//     res.send(`${public}`);

// })
app.get("/musab",(req,res)=>{
    res.sendFile(`${current}/musab.html`);

})


// app.get("/",(req,res)=>{
//     res.send(`<h1> hello i am heading </h1>
//     <p> hello i am paragraph </p>
//     <input type="text" placeholder="Enter Your Name"  />
//     <a href="/about">go to about page</a>
//     `)
// })
// app.get("/about",(req,res)=>{
//     res.send(`hello i am about page <a href="/">go to about page</a>`)
   
// })


app.listen(4000)