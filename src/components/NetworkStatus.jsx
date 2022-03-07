import React from "react";

import iconOnline  from "../etc/icon-comm-on.svg";
import iconOffline from "../etc/icon-comm-off.svg";

const NetworkStatus = ({ online }) => {
  // console.log(online);
  return (
    <img
      className="img-fluid me-3"
      src={online ? iconOnline : iconOffline}
      alt="network"
      style={{ width: 20 }}
    />
  );
};

export default NetworkStatus;
