import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  Container,
  Row,
  Col,
  Form,
  // ListGroup,
  Card,
  Button,
  ButtonGroup,
  Stack,
} from "react-bootstrap";

import useGeocodeAutocompleteAPI from "./hooks/use-geocode-autocomplete-api";

const Dashboard = () => {
  const [value, setValue] = useState("");
  const response = useGeocodeAutocompleteAPI(value);

  return (
    <Container fluid="sm">
      <Col>
        <Row sm={{ span: 8, offset: 2 }}>
          <Card>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2">Card Subtitle</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
              <motion.div
                initial={{
                  x: "-10em",
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.4,
                    type: "spring",
                  },
                }}
                className="d-flex justify-content-end"
              >
                <Card variant="secondary" className="shadow-sm --w-50">
                  <Card.Body>
                    <Stack direction="horizontal" gap={2}>
                      <Form.Control
                        className="me-auto"
                        placeholder="Add your item here..."
                        size="lg"
                        onChange={(evt) => setValue(evt.target.value)}
                        value={value}
                      />
                      <ButtonGroup size="lg">
                        <Button variant="secondary">1</Button>
                        <Button variant="secondary">2</Button>
                        <Button variant="secondary">3</Button>
                        <Button variant="primary">ok</Button>
                      </ButtonGroup>
                    </Stack>
                  </Card.Body>
                </Card>
              </motion.div>
            </Card.Body>
          </Card>

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              className="d-flex justify-content-center"
            >
              <div className="bg-dark text-light rounded-2 w-100 p-5 shadow">
                <pre>{JSON.stringify(response, null, 2)}</pre>
              </div>
            </motion.div>
        </Row>
      </Col>
    </Container>
  );
};

export default Dashboard;
