import { Button, Card } from "react-bootstrap";
import WeatherWidgetControls from "./WeatherWidgetControls";

const WeatherWidget = () => {
  return (
    <Card
      style={{ width: 222 }}
      className="p-2 fs-6 rounded-big shadow-sm text-center"
    >
      <Card.Header className="border-0 bg-transparent">
        <WeatherWidgetControls />
      </Card.Header>
      <Card.Body>
        <Card.Title>Moscow</Card.Title>
        <Card.Text>-1 &deg;C</Card.Text>
        <Card.Text className="fs-1">⛅</Card.Text>
        <Card.Text>Some clouds</Card.Text>
        <div style={{ fontSize: "90%" }}>
          <Card.Text className="my-2 d-flex align-items-center justify-content-between">
            <span>Min</span>
            <span>&deg;1</span>
          </Card.Text>
          <Card.Text className="my-2 d-flex align-items-center justify-content-between">
            <span>Max</span>
            <span>&deg;2</span>
          </Card.Text>
          <Card.Text className="my-2 d-flex align-items-center justify-content-between">
            <span>Sunset</span>
            <span>&deg;6:12pm</span>
          </Card.Text>
          <Card.Text className="my-2 d-flex align-items-center justify-content-between">
            <span>Sunrise</span>
            <span>&deg;7:12am</span>
          </Card.Text>
          <Card.Text className="my-2 d-flex align-items-center justify-content-between">
            <span>Wind</span>
            <span>&deg;0.45ms</span>
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default WeatherWidget;
