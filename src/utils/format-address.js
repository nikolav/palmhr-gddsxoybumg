const formatAddress = (address) => {
  return address.match(/^([^,]{0,17})/)[1] || "...";
};

export default formatAddress;
