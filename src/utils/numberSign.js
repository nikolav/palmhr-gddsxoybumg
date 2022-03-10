const numberSign = (number) => {
  number = parseInt(number, 10);
  return 0 !== number ? (0 < number ? `+${number}` : number) : 0;
};

export default numberSign;
