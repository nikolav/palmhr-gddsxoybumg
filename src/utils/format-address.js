const formatAddress = (address) => {
  const match = address.split(/\s*,\s*/);
  return match?.length
    ? match.shift() + (match.length ? ", " + match.pop() : "")
    : "";
};
export default formatAddress;
