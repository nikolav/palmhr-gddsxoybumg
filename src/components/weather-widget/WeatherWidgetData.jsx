import { Card } from "react-bootstrap";

const WeatherWidgetData = ({ name, value }) => {
  return (
    <Card.Text className="--fs-6 my-2 d-flex align-items-center justify-content-between">
      <span>{name}</span>
      <strong>{value}</strong>
    </Card.Text>
  );
};

export default WeatherWidgetData;
