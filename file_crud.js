const fs = require('fs');
const path = require("path");
const dirPath = path.join(__dirname, "crud");
const filePath = `${dirPath}/apple.txt`;
const newFilePath = `${dirPath}/fruit.txt`;

if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

// Creating file.
// fs.writeFileSync(filePath, "This is super star Ankit");

// Updating file
// fs.appendFile(filePath, ' and file name is apple.txt', (err) => {
//     if (!err) console.log('File updated.');
// })

// Reading data from file.
// fs.readFile(filePath, 'utf8', (err, res) => {
//     console.log(res)
// })

// Renaming data from file.
// fs.rename(filePath, newFilePath, (err) => {
//     if (!err) console.log('File name updated.');
// })

// Deleting the file
fs.unlinkSync(newFilePath)