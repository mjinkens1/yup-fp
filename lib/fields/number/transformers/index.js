const roundTransform = value => {
  return Math.round(value);
};

const truncateTransform = value => {
  return Math.trunc(value);
};

export { roundTransform, truncateTransform };
