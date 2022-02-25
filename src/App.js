import "./App.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const App = () => {
  return (
    <Container fluid="md">
      <Row xs="1">
        <Col>
          <div
            style={{ minHeight: "100vh" }}
            className="d-flex justify-content-center align-items-center"
          >
            <p className="display-1">weatherapp</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
