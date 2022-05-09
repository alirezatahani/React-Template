const calculateWidth = (num: number) => `${(num * 100) / 12}%`;

const calculateGutterPadding = (value: number) => {
  return `${value * 0.5}rem`;
};
const calculateGutterMargin = (value: number) => {
  return `${value * -0.5}rem`;
};

export { calculateWidth, calculateGutterPadding, calculateGutterMargin };
