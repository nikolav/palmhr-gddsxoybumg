import { Card } from "react-bootstrap";

const WeatherWidgetData = ({ name, value }) => {
  return (
    <Card.Text className="my-2 d-flex align-items-center justify-content-between">
      <span>{name}</span>
      <span>{value}</span>
    </Card.Text>
  );
};

export default WeatherWidgetData;
