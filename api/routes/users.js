const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  return res.json({
    name: "nikoav",
  });
});

module.exports = router;
