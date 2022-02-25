var express = require("express");
var router = express.Router();

router.get("/api", function (req, res, next) {
  return res.json({
    message: "welcome",
    version: "0.0.0",
    appname: "weatherapp@palmhr",
  });
});

module.exports = router;
