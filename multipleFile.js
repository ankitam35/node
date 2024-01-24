const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, 'files');

if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

for (let i = 1; i <= 20; i++) {
    fs.writeFileSync(`${dirPath}/${i}.txt`, i.toString());
}
