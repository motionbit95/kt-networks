var express = require("express");
var path = require("path");
var app = express();
var PORT = 8001;

app.use(express.static(path.join(__dirname, "/build")));

app.get("", function (req, res) {
  // res.sendFile(path.join(__dirname, "/build/index.html"));
});

app.post("/kspay_wh_rcv", function (req, res) {
  console.log(req);
});

app.get("/kspay_wh_result", function (req, res) {
  console.log(req);
});

app.listen(PORT, () => {
  console.log(`server started on PORT ${PORT}`);
});
