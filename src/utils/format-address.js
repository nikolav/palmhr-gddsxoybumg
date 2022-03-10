const formatAddress = (address) => {
  return (address.match(/^([^,]{0,11})/)[1] || "").substring(0, 14);
};

export default formatAddress;
