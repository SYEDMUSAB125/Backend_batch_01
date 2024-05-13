// console.log( " hi we are learnig input command line terminal" )

// console.log( process.argv )
// console.log(input);
//  console.log("my Name is " + input[2]+ " " + input[3] )
// console.log(`My Name is ${input[2]} ${input[3]} `);

// fs.writeFileSync(input[2],input[3] + " " + input[4])
// fs.writeFileSync(input[2], `${input[3]} ${input[4]} ${input[5]}  ` )

const fs = require('fs');
const path = require('path');
const input = process.argv;
const currentPath = path.join(__dirname , "files")
console.log(currentPath);
let i;
for(i=1 ; i<6 ; i++){
    fs.writeFileSync(`${currentPath}/${input[2]}${i}`, "dayyan will buy iphone 13 pro"+ i )
}