module.exports =  reqFilter = (req, res, next) => {
    if(req.query.age > 18){
       res.send("you are egligible to make your nic")
   
    }
    else if(req.query.age < 18){
       res.send("you are not egligible to make your nic")
    }
   else{
       next()
   }
   }