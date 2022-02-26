import WeatherWidgetControlsFilter from "./WeatherWidgetControlsFilter";
import WeatherWidgetControlsRemove from "./WeatherWidgetControlsRemove";

const WeatherWidgetControls = () => {
  return (
    <div className="d-flex gap-3 align-items-center justify-content-end">
      <WeatherWidgetControlsFilter />
      <WeatherWidgetControlsRemove />
    </div>
  );
};

export default WeatherWidgetControls;
