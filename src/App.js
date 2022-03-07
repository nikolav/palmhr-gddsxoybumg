import "./App.css";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import WeatherWidget from "./components/weather-widget/WeatherWidget";
import ButtonFloatingAddCity from "./components/ButtonFloatingAddCity";
import Navigation from "./components/Navigation";

import useNetworkStatus from "./hooks/use-network-status";

const App = ({ logout }) => {

  // setup root state
  
  const { online } = useNetworkStatus();
  // console.log(online);

  const [widgets, setWidgets] = useState(
    ["Belgrade, Serbia", "Wien, Austria", "Riyadh, SA", "Dubai, UAE"].sort(
      () => Math.random() - 0.5
    )
  );

  // management points
  const addPlace = (place) => {
    if ((place = place.trim()) && -1 === widgets.indexOf(place))
      setWidgets((widgets_) => [place, ...widgets_]);
  };
  const removePlace = (place) =>
    setWidgets((widgets_) => widgets_.filter((city) => city !== place));

  //
  // handle dnd-drop reorder
  const dragEnd_ = (result) => {
    if (!result.destination) return;
    const items = [...widgets];
    const [reordered] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reordered);

    setWidgets(items);
  };

  return (
    <>
      <Navigation logout={logout} online={online} />
      <Container fluid>
        <Row>
          <Col>
            <DragDropContext onDragEnd={dragEnd_}>
              <Droppable droppableId="dd-droppable" direction="horizontal">
                {(provided) => (
                  <div
                    className="dd-context d-flex flex-wrap gap-2 justify-content-center"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {widgets.map((place, index) => (
                      <Draggable key={place} draggableId={place} index={index}>
                        {(provided) => (
                          <div
                            className="dd-draggable"
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                          >
                            <motion.div
                              whileHover={{
                                scale: 1.023,
                              }}
                            >
                              <WeatherWidget
                                removePlace={() => removePlace(place)}
                                address={place}
                              />
                            </motion.div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </Col>
        </Row>
      </Container>
      <ButtonFloatingAddCity addPlace={addPlace} />
    </>
  );
};

export default App;
