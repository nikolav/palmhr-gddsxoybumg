const WeatherWidgetControlsRemove = ({ removePlace }) => {
  return (
    <div className="widget-actions">
      <i
        onClick={(evt) => {
          evt.preventDefault();
          removePlace();
        }}
        className="fa-regular fa-trash-can"
      ></i>
    </div>
  );
};

export default WeatherWidgetControlsRemove;
