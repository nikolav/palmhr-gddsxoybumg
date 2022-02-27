import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import WeatherWidgetControls from "./WeatherWidgetControls";
import WeatherWidgetData from "./WeatherWidgetData";

import { motion } from "framer-motion";

const WeatherWidget = ({ address, removePlace }) => {
  const [temp, setTemp] = useState("");
  const [icon, setIcon] = useState("");
  const [description, setDescription] = useState("");
  const [tempMin, setTempMin] = useState("");
  const [tempMax, setTempMax] = useState("");
  const [sunset, setSunset] = useState("");
  const [sunrise, setSunrise] = useState("");
  const [wind, setWind] = useState("");

  useEffect(() => {
    const fetch_ = async () => {
      // fetch lat-lon from ggle
      const { results } = await (
        await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyAg15L3_mc77wX8TemqE1tPcoieQB3kJ9c`
        )
      ).json();

      const { lat, lng: lon } = results[0].geometry.location;

      // fetch info from openweather
      const wData = await (
        await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=890c761c3de1ec21feefe4b2af7971c9`
        )
      ).json();

      const fTemp = Math.round(wData.main.temp - 273.15);
      const temp_min = Math.round(wData.main.temp_min - 273.15);
      const temp_max = Math.round(wData.main.temp_max - 273.15);
      const { description, icon } = wData.weather[0];
      const { timezone } = wData;
      const { sunrise, sunset } = wData.sys;
      const wind = wData.wind.speed;

      setTemp(fTemp);
      setIcon(icon);
      setDescription(description);
      setTempMin(temp_min);
      setTempMax(temp_max);
      setSunrise(convertToTZ(sunrise, timezone));
      setSunset(convertToTZ(sunset, timezone));
      setWind(Math.round(wind));
      //
      // console.log(wData);
    };
    fetch_();
  }, []);

  return (
    <Card
      style={{ width: 222 }}
      className="p-2 fs-6 rounded-big shadow-sm text-center flex-shrink-0"
    >
      <Card.Header className="border-0 bg-transparent">
        <WeatherWidgetControls removePlace={removePlace} />
      </Card.Header>
      <Card.Body>
        <Card.Title>{address_(address)}</Card.Title>
        <Card.Text>
          <strong className="fs-3">
            {temp} {"\u00b0"}C
          </strong>
        </Card.Text>
        <Card.Text>
          {icon && (
            <img
              src={`http://openweathermap.org/img/w/${icon}.png`}
              alt={address}
            />
          )}
        </Card.Text>
        <Card.Text>
          <em className="opacity-75">{ucFirstText(description)}</em>
        </Card.Text>
        <div style={{ fontSize: "90%" }}>
          <WeatherWidgetData name="Min" value={`${tempMin}\u00b0C`} />
          <WeatherWidgetData name="Max" value={`${tempMax}\u00b0C`} />
          <WeatherWidgetData name="Sunrise" value={sunrise} />
          <WeatherWidgetData name="Sunset" value={sunset} />
          <WeatherWidgetData name="Wind" value={`${wind}ms`} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default WeatherWidget;

//
function convertToTZ(unixT, tz) {
  let dt = new Date((unixT + tz) * 1000);
  let h = dt.getHours();
  let m = "0" + dt.getMinutes();
  let t = h + ":" + m.substr(-2);
  return t;
}
function ucFirstText(text) {
  return String(text)
    .split(/\s+/g)
    .reduce((value, word) => {
      value += " " + ucfirst(word);
      return value;
    }, "");
}
function ucfirst(word) {
  return word[0]?.toUpperCase() + word.substr(1).toLowerCase();
}
function address_(addr) {
  const m = String(addr).match(/^([a-z]+).*/i);
  return ucfirst(m[1]);
}

// const GEOSEARCHURI =
//   "https://maps.googleapis.com/maps/api/geocode/json?address=Moscow&key=AIzaSyAg15L3_mc77wX8TemqE1tPcoieQB3kJ9c";
// const OPENWEATHERURI =
//   "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=890c761c3de1ec21feefe4b2af7971c9";
// const WEATHERICON = "http://openweathermap.org/img/w/${result.icon}.png";
//  fTemp = (cTemp - 32) * 5 / 9
