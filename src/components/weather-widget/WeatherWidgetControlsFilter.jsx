import React from "react";
import { Dropdown } from "react-bootstrap";
import iconFilter from "../../etc/icon-filter.svg";

// access node in order to position the Menu
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <div
    onClick={(evt) => {
      evt.preventDefault();
      onClick(evt);
    }}
    ref={ref}
    className="widget-actions"
    style={{ "verticalAlign": "initial" }}
  >
    <img
      style={{ width: 18, marginTop: -3}}
      className="cursor-pointer"
      src={iconFilter}
      alt="display options"
    />
  </div>
));

const WeatherWidgetControlsFilter = ({ filters, setShowFilter }) => {
  const filterTemp = () => {
    setShowFilter((filters) => ({ ...filters, temp: !filters.temp }));
  };
  const filterTimes = () => {
    setShowFilter((filters) => ({ ...filters, times: !filters.times }));
  };
  const filterWind = () => {
    setShowFilter((filters) => ({ ...filters, wind: !filters.wind }));
  };

  return (
    <Dropdown align="end" autoClose="outside">
      {/* pass custom component as a toggle button */}
      <Dropdown.Toggle as={CustomToggle}></Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.ItemText className="text-center fst-italic text-muted small">
          Select Fields to display
        </Dropdown.ItemText>
        <Dropdown.Item eventKey="1" onClick={filterTemp}>
          <i
            className={`me-3 fa-solid fa-check-circle ${
              filters.temp ? "" : "invisible"
            }`}
          ></i>
          Min/Max Temperature
        </Dropdown.Item>
        <Dropdown.Item eventKey="2" onClick={filterTimes}>
          <i
            className={`me-3 fa-solid fa-check-circle ${
              filters.times ? "" : "invisible"
            }`}
          ></i>
          Sunrise/Sunset Times
        </Dropdown.Item>
        <Dropdown.Item eventKey="3" onClick={filterWind}>
          <i
            className={`me-3 fa-solid fa-check-circle ${
              filters.wind ? "" : "invisible"
            }`}
          ></i>
          Wind
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default WeatherWidgetControlsFilter;
