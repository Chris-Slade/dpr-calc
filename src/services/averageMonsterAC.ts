export default (cr: number) => {
  if (cr <= 1 / 8) {
    return 12;
  }

  return 13 + Math.floor(cr / 3);
};
