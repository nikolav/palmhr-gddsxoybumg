// tz offsets from gm
const convertToTZ = (unixT, tz) => {
  let dt = new Date((unixT + tz) * 1000);
  return ampm(dt);
};

export default convertToTZ;



// Date{} -> h:m:a
function ampm(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  const strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}
