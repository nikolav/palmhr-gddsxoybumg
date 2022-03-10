import React from "react";

import iconOnline  from "../etc/icon-online.svg";

const NetworkStatus = () => {
  return (
    <img
      className="img-fluid me-3"
      src={iconOnline}
      alt="online"
      style={{ width: 20 }}
    />
  );
};

export default NetworkStatus;
