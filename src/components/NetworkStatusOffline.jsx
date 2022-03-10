import React from "react";

import iconOffline from "../etc/icon-offline.svg";

const NetworkStatus = ({ online }) => {
  return (
    <img
      className="img-fluid me-3"
      src={iconOffline}
      alt="offline"
      style={{ width: 20 }}
    />
  );
};

export default NetworkStatus;
