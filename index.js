var http = require("http");
var ejs = require("ejs");
var fs = require("fs");

var server = http.createServer(function (request, response) {
  if (request.url === "/Monday" && request.method === "GET") {
    response.writeHead(200, { "Content-Type": "text/html" });
    var htmlContent = fs.readFileSync("./views/monday.ejs", "utf8");
    response.end(
      ejs.render(htmlContent, {
        filename: "monday.ejs",
        timeStamp: getWeekDayDate(1),
      })
    );
  } else if (request.url === "/Tuesday" && request.method === "GET") {
    response.writeHead(200, { "Content-Type": "text/html" });
    var htmlContent = fs.readFileSync("./views/tuesday.ejs", "utf8");
    response.end(
      ejs.render(htmlContent, {
        filename: "tuesday.ejs",
        timeStamp: getWeekDayDate(2),
      })
    );
  } else if (request.url === "/Wednesday" && request.method === "GET") {
    response.writeHead(200, { "Content-Type": "text/html" });
    var htmlContent = fs.readFileSync("./views/wednesday.ejs", "utf8");
    response.end(
      ejs.render(htmlContent, {
        filename: "wednesday.ejs",
        timeStamp: getWeekDayDate(3),
      })
    );
  } else {
    response.writeHead(200, { "Content-Type": "text/html" });
    var htmlContent = fs.readFileSync("./views/index.ejs", "utf8");
    response.end(
      ejs.render(htmlContent, {
        filename: "wednesday.ejs",
        timeStamp: getWeekDayDate(1),
      })
    );
   }
});

const getWeekDayDate = (weekDay) => {
  let currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + weekDay - currentDate.getDay());
  return currentDate.toLocaleString();
};

module.exports = {getWeekDayDate,server}
server.listen(3000, "127.0.0.1");
