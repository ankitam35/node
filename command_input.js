// Run command node .\command_input.js hello to take input from command line
// Get response as array of first 2 default param
// console.log(process.argv)

const fs = require("fs")

const { argv: input } = process;
fs.writeFileSync(input[2], input[3]) //  node .\command_input.js hello.txt "This is Ankit"