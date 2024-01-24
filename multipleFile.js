const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, 'files');

if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

for (let i = 1; i <= 5; i++) {
    fs.writeFileSync(`${dirPath}/${i}.txt`, i.toString());
}


fs.readdir(dirPath, (err, files) => {
    files.forEach(item => {
        console.log("This is file name ", item)
    })
})