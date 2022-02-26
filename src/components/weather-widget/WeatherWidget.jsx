import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import WeatherWidgetControls from "./WeatherWidgetControls";
import WeatherWidgetData from "./WeatherWidgetData";

const WeatherWidget = ({ address }) => {
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
        <WeatherWidgetControls />
      </Card.Header>
      <Card.Body>
        <Card.Title>{address}</Card.Title>
        <Card.Text>
          {temp} {"\u00b0"}C
        </Card.Text>
        <Card.Text className="fs-1">
          {icon && (
            <img
              src={`http://openweathermap.org/img/w/${icon}.png`}
              alt={address}
            />
          )}
        </Card.Text>
        <Card.Text>{description}</Card.Text>
        <div style={{ fontSize: "90%" }}>
          <WeatherWidgetData name="Min" value={`\u00b0${tempMin}`} />
          <WeatherWidgetData name="Max" value={`\u00b0${tempMax}`} />
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

// const GEOSEARCHURI =
//   "https://maps.googleapis.com/maps/api/geocode/json?address=Moscow&key=AIzaSyAg15L3_mc77wX8TemqE1tPcoieQB3kJ9c";
// const OPENWEATHERURI =
//   "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=890c761c3de1ec21feefe4b2af7971c9";
// const WEATHERICON = "http://openweathermap.org/img/w/${result.icon}.png";
//  fTemp = (cTemp - 32) * 5 / 9
