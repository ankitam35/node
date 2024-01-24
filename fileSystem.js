// Code to write file
const { writeFileSync } = require("fs");  // Importing file System module.

writeFileSync("file.txt", __dirname)