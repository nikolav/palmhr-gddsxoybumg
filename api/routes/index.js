var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  return res.json({
    message: "welcome",
    version: "0.1.1",
    appname: "weatherapp@palmhr",
  });
});

module.exports = router;
