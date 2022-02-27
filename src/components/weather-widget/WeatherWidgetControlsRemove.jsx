const WeatherWidgetControlsRemove = ({ removePlace }) => {
  return (
    <a href="#" role="button" className="widget-actions">
      <i
        onClick={(evt) => {
          evt.preventDefault();
          removePlace();
        }}
        className="fa-regular fa-trash-can"
      ></i>
    </a>
  );
};

export default WeatherWidgetControlsRemove;
