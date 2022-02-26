const WeatherWidgetControlsRemove = ({ removePlace }) => {
  return (
    <a href="!#" role="button">
      <i onClick={removePlace} className="fa-regular fa-trash-can"></i>
    </a>
  );
};

export default WeatherWidgetControlsRemove;
