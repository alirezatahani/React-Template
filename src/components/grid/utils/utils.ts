const calculateWidth = (num: number) => `flex: 0 1 ${(num * 100) / 12}%`;

const calculateGutterPadding = (value: number) => {
  return `
  padding-left:${value * 0.5}rem;
  padding-right:${value * 0.5}rem;
  `;
};
const calculateRowMargin = (value: number) => {
  return ` 
  margin-right: -${value}px;
  margin-left: -${value}px;
  `;
};

export { calculateWidth, calculateGutterPadding, calculateRowMargin };
