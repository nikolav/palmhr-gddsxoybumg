const WeatherWidgetControlsRemove = ({ removePlace }) => {
  return (
    <div className="widget-actions cursor-pointer"
      style={{marginInlineStart: -2}}
    >
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
