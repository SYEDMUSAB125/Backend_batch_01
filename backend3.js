// console.log( " hi we are learnig input command line terminal" )

// console.log( process.argv )
// console.log(input);
//  console.log("my Name is " + input[2]+ " " + input[3] )
// console.log(`My Name is ${input[2]} ${input[3]} `);

// fs.writeFileSync(input[2],input[3] + " " + input[4])
// fs.writeFileSync(input[2], `${input[3]} ${input[4]} ${input[5]}  ` )

// const path = require('path');
// const currentPath = path.join(__dirname , "files")
// console.log(currentPath);

// fs.readdir(currentPath,(err,files)=>{
    //     if(!err){
        //      files.forEach((file) => {
            //         console.log("the file name is " + file)
            //      })
            
            //     }
            //     else{
                //         console.log("masla araa hai")
                //  }});
                
                
                const fs = require('fs');
                const input = process.argv;
                // console.log(input);
                // fs.writeFileSync(input[2],input[3] )
                // if(input[2] == "add"){
                //    fs.writeFileSync(input[3],input[4] )
                // }else if(input[2] == "remove"){
                //     fs.unlinkSync(input[3])
                // }else{
                //     console.log("invalid command")
                // }
// fs.readFile(input[2],"utf-8",(err,data)=>{
//     if(!err){
//         console.log(data)
//     }else{
//         console.log("file not found")
//     }
// })

// fs.renameSync(input[2],input[3])

// CRUD => Create Read Update Delete

// 0 1 0 1 0 1 0 1 8 bit = 1 Byte 