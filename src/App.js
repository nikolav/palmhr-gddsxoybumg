import "./App.css";
import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";

const App = ({ logout }) => {
  return (
    <Container fluid="md">
      <Row xs="1">
        <Col>
          <div
            style={{ minHeight: "100vh" }}
            className="d-flex justify-content-center align-items-center"
          >
            <p className="display-1">weatherapp</p>
            <p>
              <div className="position-absolute top-0 end-0 p-0 p-sm-2">
                <ButtonGroup>
                  <Button
                    href="https://github.com/nikolav/palmhr-gddsxoybumg.git"
                    target="_blank"
                  >
                    <i class="fa-brands fa-github"></i>
                  </Button>
                  <Button onClick={logout} variant="secondary" id="_3">
                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                  </Button>
                </ButtonGroup>
              </div>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
