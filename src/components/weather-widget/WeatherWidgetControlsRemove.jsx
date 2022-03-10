import iconTrash from "../../etc/icon-trash-orig.svg";

const WeatherWidgetControlsRemove = ({ removePlace }) => {
  return (
    <div
      className="widget-actions cursor-pointer"
      style={{ 
        marginInlineStart: -2, 
        marginInlineEnd: -8,
        marginTop: -4
      }}
    >
      {/* <i
        onClick={(evt) => {
          evt.preventDefault();
          removePlace();
        }}
        className="fa-regular fa-trash-can"
      ></i> */}
      <img
        onClick={(evt) => {
          evt.preventDefault();
          removePlace();
        }}
        style={{ height: 27 }}
        src={iconTrash}
        alt="remove"
      />
    </div>
  );
};

export default WeatherWidgetControlsRemove;
