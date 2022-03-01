const express = require("express");
const router  = express.Router();

router.get("/", function (req, res, next) {

  // send about
  return res.json({
    message: "welcome",
    version: process.env.APP_VERSION,
    appname: process.env.APP_NAME,
  });

});

module.exports = router;
