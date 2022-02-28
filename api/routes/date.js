const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  return res.json({
    payload: new Date().toLocaleDateString(),
  });
});

module.exports = router;
