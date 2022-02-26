import "./App.css";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import WeatherWidget from "./components/weather-widget/WeatherWidget";
import Heading from "./components/Heading";
import Menu from "./components/Menu";

const App = ({ logout }) => {
  const [widgets, setWidgets] = useState([
    "Belgrade",
    "Wien",
    "Riyadh",
    "Dubai",
  ]);
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
              <WeatherWidget address={place} key={place} />
            ))}
          </Col>
        </Row>
        
      </Container>

      <Menu logout={logout} />
    </>
  );
};

export default App;
