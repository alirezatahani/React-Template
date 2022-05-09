const calculateWidth = (num: number) => `width: ${(num * 100) / 12}%`;

const calculateGutterPadding = (value: number) => {
  return `
  padding-left:${value * 0.5}rem;
  padding-right:${value * 0.5}rem;
  `;
};
const calculateGutterMargin = (value: number) => {
  return `
  margin-right: ${value * -0.5}rem;
  margin-left: ${value * -0.5}rem;
  `;
};

export { calculateWidth, calculateGutterPadding, calculateGutterMargin };
