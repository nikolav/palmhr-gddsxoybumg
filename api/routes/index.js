const express = require("express");
const router  = express.Router();


// send about
router.get("/", (req, res, next) => {
  return res.json({
    message: "welcome",
    version: 1, //process.env.APP_VERSION,
    appname: 1, //process.env.APP_NAME,
  });
});


// send search-term suggestions
router.get("/geocode_autocomplete/:input", async (req, res, next) => {

  // @todo
  // redis cache engine
  //

  const axios = require("axios");

  // const { input: INPUT } = req.params;
  const GC_AUTOCOMPLETE_URI = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=Nikol&types=geocode&key=AIzaSyAg15L3_mc77wX8TemqE1tPcoieQB3kJ9c`;

  const r = await axios(GC_AUTOCOMPLETE_URI);
  return res.json({...r});


  // try {
  //   axios({
  //     url: GC_AUTOCOMPLETE_URI,
  //     method: "get",
  //     responseType: "json",
  //   }).then((response) => {
  //     return res.json(response);
  //   });
  // } catch (error) {
  //   return res.json({ error });
  // }

  // return res.json({ error: -1 });
});

module.exports = router;
// https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(INPUT)}&types=geocode&key=AIzaSyAg15L3_mc77wX8TemqE1tPcoieQB3kJ9c
