var express = require("express");
var app = express();
const port = 3000;

const setTimeMiddleWare = function (req, res, next) {
  req.currentDate = new Date();
  next();
};

const redirectToDetails = function (req, res, next) {
  res.redirect("details/" + req.currentDate);
};

app.use("/details/:currentDate", function (req, res, next) {
  res.send(`Hello World details ${req.params.currentDate}`);
});

app.get(
  "/home",
  setTimeMiddleWare,
  redirectToDetails,
  function (req, res, next) {
    console.log(req.currentDate);
    res.send("Hello World");
  }
);

app.get(
  "/",
  function (req, res, next) {
    res.redirect("home");
  }
);

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
