import "./App.css";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import WeatherWidget from "./components/weather-widget/WeatherWidget";
import Heading from "./components/Heading";
import Menu from "./components/Menu";
import ButtonFloatingAddCity from "./components/ButtonFloatingAddCity";

const App = ({ logout }) => {
  const [widgets, setWidgets] = useState([
    "Belgrade",
    "Wien",
    "Riyadh",
    "Dubai",
  ]);
  const addPlace = (place) => {
    if (-1 === widgets.indexOf(place))
      setWidgets((widgets_) => [place, ...widgets_]);
  };
  const removePlace = (place) =>
    setWidgets((widgets_) => widgets_.filter((city) => city !== place));
  
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Heading />
          </Col>
        </Row>

        <Row>
          <Col className="d-flex gap-1 justify-content-evenly flex-wrap">
            {widgets.map((place) => (
              <WeatherWidget
                removePlace={() => removePlace(place)}
                address={place}
                key={place}
              />
            ))}
          </Col>
        </Row>
      </Container>

      <Menu logout={logout} />
      <ButtonFloatingAddCity addPlace={addPlace} />
    </>
  );
};

export default App;
