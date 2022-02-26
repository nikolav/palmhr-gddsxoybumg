import "./App.css";
import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";
import WeatherWidget from "./components/weather-widget/WeatherWidget";

const App = ({ logout }) => {
  return (
    <Container fluid="md">
      <Row xs="1">
        <Col>
          <div
            style={{ minHeight: "100vh" }}
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <h1 className="display-1">weatherapp</h1>
            <p className="text-muted">under construction</p>
            <WeatherWidget />
          </div>
          <div className="position-absolute top-0 end-0 p-0 p-sm-2">
            <ButtonGroup>
              <Button
                href="https://github.com/nikolav/palmhr-gddsxoybumg.git"
                target="_blank"
              >
                <i className="fa-brands fa-github"></i>
              </Button>
              <Button onClick={logout} variant="secondary" id="_3">
                <i className="fa-solid fa-arrow-right-from-bracket"></i>
              </Button>
            </ButtonGroup>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
