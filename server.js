const http = require("http");
const app = require("./app");
const { Schema } = require("mongoose");

const port = process.env.PORT || 8000;
const server = http.createServer(app);

app.listen(port)

module.exports = server
const userSchema =new Schema({
    
})