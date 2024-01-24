const http = require("http");
const colors = require("colors")

const dataControl = (req, res) => {
    res.write("<h1>This is Ankit Mishra</h1>");
    res.end()
}

http.createServer(dataControl).listen(4500)
console.log("This is server code".bgBlue)