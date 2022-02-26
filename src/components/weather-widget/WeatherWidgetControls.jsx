import WeatherWidgetControlsDragHandles from "./WeatherWidgetControlsDragHandles";
import WeatherWidgetControlsFilter from "./WeatherWidgetControlsFilter";
import WeatherWidgetControlsRemove from "./WeatherWidgetControlsRemove";

const WeatherWidgetControls = ({removePlace}) => {
  return (
    <div className="d-flex align-items-center justify-content-between">
      <WeatherWidgetControlsDragHandles />
      <div className="d-flex gap-3">
        <WeatherWidgetControlsFilter />
        <WeatherWidgetControlsRemove removePlace={removePlace} />
      </div>
    </div>
  );
};

export default WeatherWidgetControls;
