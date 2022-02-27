const WeatherWidgetControlsRemove = ({ removePlace }) => {
  return (
    <div className="widget-actions cursor-pointer">
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
