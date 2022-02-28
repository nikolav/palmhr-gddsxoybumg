import "./App.css";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

import WeatherWidget from "./components/weather-widget/WeatherWidget";
import ButtonFloatingAddCity from "./components/ButtonFloatingAddCity";
import Navigation from "./components/Navigation";

const App = ({ logout }) => {
  const [widgets, setWidgets] = useState(
    ["Belgrade", "Wien", "Riyadh", "Dubai"]
      .sort(() => Math.random() - .5));
    
  const addPlace = (place) => {
    if ((place = place.trim()) && -1 === widgets.indexOf(place))
      setWidgets((widgets_) => [place, ...widgets_]);
  };
  const removePlace = (place) =>
    setWidgets((widgets_) => widgets_.filter((city) => city !== place));

  return (
    <>
      <Navigation logout={logout} />
      <Container fluid>
        <Row>
          <Col className="d-flex gap-2 justify-content-evenly flex-wrap">
            {widgets.map((place) => (
              <motion.div
                key={place}
                whileHover={{
                  scale: 1.0123,
                }}
              >
                <WeatherWidget
                  removePlace={() => removePlace(place)}
                  address={place}
                />
              </motion.div>
            ))}
          </Col>
        </Row>
      </Container>
      <ButtonFloatingAddCity addPlace={addPlace} />
    </>
  );
};

export default App;
