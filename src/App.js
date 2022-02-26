import "./App.css";
import { useState } from "react";
import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";
import WeatherWidget from "./components/weather-widget/WeatherWidget";

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

          {/* heading */}
          <Col>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h1 className="display-1">weatherapp</h1>
              <p className="text-muted">under construction</p>
            </div>
          </Col>
        </Row>
        <Row>

          {/* widgets */}
          <Col className="d-flex gap-1 justify-content-evenly flex-wrap">
            {widgets.map((place) => (
              <WeatherWidget address={place} key={place} />
            ))}
          </Col>
        </Row>
      </Container>

      {/* menu */}
      <div className="position-fixed top-0 end-0 p-0 p-sm-2">
        <ButtonGroup>
          <Button
            href="https://github.com/nikolav/palmhr-gddsxoybumg.git"
            target="_blank"
          >
            <i className="fa-brands fa-github"></i>
          </Button>
          <Button onClick={logout} variant="secondary">
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
          </Button>
        </ButtonGroup>
      </div>
    </>
  );
};

export default App;
