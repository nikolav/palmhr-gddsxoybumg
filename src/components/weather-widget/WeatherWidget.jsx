import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
// import WeatherWidgetControlsDragHandles from "./WeatherWidgetControlsDragHandles";
import WeatherWidgetControlsFilter from "./WeatherWidgetControlsFilter";
import WeatherWidgetControlsRemove from "./WeatherWidgetControlsRemove";
import WeatherWidgetData from "./WeatherWidgetData";

import * as utils from "../../utils";

const WeatherWidget = ({ address, removePlace }) => {
  const [temp, setTemp] = useState("");
  const [description, setDescription] = useState("");
  const [tempMin, setTempMin] = useState("");
  const [tempMax, setTempMax] = useState("");
  const [sunset, setSunset] = useState("");
  const [sunrise, setSunrise] = useState("");
  const [wind, setWind] = useState("");

  const [showFilter, setShowFilter] = useState({
    temp: true,
    times: true,
    wind: true,
  });

  useEffect(() => {
    const fetch_ = async () => {
      // geocode ggle
      const { results } = await (
        await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyAg15L3_mc77wX8TemqE1tPcoieQB3kJ9c`
        )
      ).json();

      // exit if no data
      if (0 === results.length) return;

      const { lat, lng: lon } = results[0].geometry?.location;

      // fetch openweather
      const wData = await (
        await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=890c761c3de1ec21feefe4b2af7971c9`
        )
      ).json();

      const fTemp = Math.round(wData.main.temp - 273.15);
      const temp_min = Math.round(wData.main.temp_min - 273.15);
      const temp_max = Math.round(wData.main.temp_max - 273.15);
      const { description } = wData.weather[0];
      const { timezone } = wData;
      const { sunrise, sunset } = wData.sys;
      const wind = wData.wind.speed;

      setTemp(fTemp);
      setDescription(description);
      setTempMin(temp_min);
      setTempMax(temp_max);
      setSunrise(utils.convertToTZ(sunrise, timezone));
      setSunset(utils.convertToTZ(sunset, timezone));
      setWind(Math.round(wind));

      // console.log(wData);
    };

    //
    fetch_();
  }, [address]);

  return (
    "number" == typeof temp && (
      <Card
        // style={{ width: 222 }}
        style={{ width: 359 }}
        className="p-2 fs-6 rounded-big shadow-sm text-center flex-shrink-0"
      >
        <Card.Header
          style={{ paddingTop: 8, paddingRight: 28 }}
          className="border-0 bg-transparent"
        >
          {/* <WeatherWidgetControlsDragHandles /> */}
          <div className="d-flex gap-3 align-items-center justify-content-end">
            <WeatherWidgetControlsFilter
              filters={showFilter}
              setShowFilter={setShowFilter}
            />
            <WeatherWidgetControlsRemove removePlace={removePlace} />
          </div>
        </Card.Header>
        <Card.Body 
        style={{ 
          paddingTop: 12,
          paddingLeft: 33,
          paddingRight: 33
         }}
        >
          <Card.Title>{utils.formatAddress(address)}</Card.Title>
          <Card.Text>
            <strong className="--fs-1 fw-normal"
              style={{fontSize: "2.68em", lineHeight: "1.66em"}}
            >
              {utils.numberSign(temp)}{"\u00b0"}C
            </strong>
          </Card.Text>
          <Card.Text
            style={{paddingTop: 12}}
          >
            {description && (
              <img
                src={utils.icon(description)}
                alt={address}
                style={{ height: 60 }}
              />
            )}
          </Card.Text>
          <Card.Text
            style={{paddingTop: 16}}
          >
            <span>{utils.ucFirst(description)}</span>
          </Card.Text>
          <div style={{
             fontSize: "90%", 
             lineHeight: "2em",
             paddingTop: 7,
             paddingBottom: 7
            }}
          >
            {showFilter.temp && (
              <>
                <WeatherWidgetData
                  name="Min Temperature:"
                  value={`${tempMin} \u00b0C`}
                />
                <WeatherWidgetData
                  name="Max Temperature:"
                  value={`${tempMax} \u00b0C`}
                />
              </>
            )}
            {showFilter.times && (
              <>
                <WeatherWidgetData name="Sunset:" value={sunset} />
                <WeatherWidgetData name="Sunrise:" value={sunrise} />
              </>
            )}
            {showFilter.wind && (
              <WeatherWidgetData name="Wind:" value={`${wind}ms`} />
            )}
          </div>
        </Card.Body>
      </Card>
    )
  );
};

export default WeatherWidget;
