// require("dotenv").config();
const express = require("express");
const router = express.Router();



// GET @ /api
// send about
router.get("/", (req, res, next) => {
  const { payload } = req.params;
  return res.json({
    message: "welcome",
    version: "0.0.0",                  // process.env.APP_VERSION,
    appname: "palmhr/weather-web-app", // process.env.APP_NAME,
    payload,
  });
});



// GET @ /api/geocode_autocomplete/:input
// send autocomplete, param required
router.get("/geocode_autocomplete/:input", async (req, res, next) => {
  //
  // @todo
  // redis cache engine
  //

  const axios = require("axios");

  const { input: INPUT }    = req.params;
  const GC_AUTOCOMPLETE_URI = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${INPUT}&types=geocode&key=AIzaSyAg15L3_mc77wX8TemqE1tPcoieQB3kJ9c`;


  // query ggle for autocomplete matches
  return axios(GC_AUTOCOMPLETE_URI).then(({ data }) => {
    let autocomplete = [];
    if (0 < data.predictions.length) {
      autocomplete = data.predictions
        .map((node) => node.description)
        .slice(0, 5);
    }

    return res.json(autocomplete);
  });
});

module.exports = router;
