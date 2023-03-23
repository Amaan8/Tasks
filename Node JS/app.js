const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Amaan");
});

server.listen(4000);
