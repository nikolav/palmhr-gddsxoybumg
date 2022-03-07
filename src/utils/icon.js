import iconSun       from "../etc/icon-sun.svg";
import iconSnow      from "../etc/icon-snow.svg";
import iconRain      from "../etc/icon-rain.svg";
import iconCloud     from "../etc/icon-cloud.svg";
import iconFog       from "../etc/icon-fog.svg";
import iconHaze      from "../etc/icon-haze.svg";
import iconSmoke     from "../etc/icon-smoke.svg";
import iconMist      from "../etc/icon-mist.svg";
import iconCloudsFew from "../etc/icon-clouds-few.svg";
import iconDust      from "../etc/icon-dust.svg";

const re_iconType = 
  /(rain|few clouds|snow|cloud|fog|haze|smoke|mist|dust)/i;

const weatherStatus = {
  sun          : iconSun,
  snow         : iconSnow,
  rain         : iconRain,
  cloud        : iconCloud,
  fog          : iconFog,
  haze         : iconHaze,
  smoke        : iconSmoke,
  mist         : iconMist,
  "few clouds" : iconCloudsFew,
  dust         : iconDust,
};

// fetch icon by description
// @default `sun`
function icon(description) {
  const match = description.match(re_iconType);
  return weatherStatus[match ? match[1].toLowerCase() : "sun"];
}

export default icon;
