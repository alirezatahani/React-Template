export const inCreaseValue = (
  index: number,
  value: any,
  onChange: (value: any, name?: string) => void
) => {
  const newValue = value.map((item: any, _index: number) => {
    if (index == _index) {
      return { ...item, value: item.value + 1 };
    }
    return item;
  });

  onChange(newValue);
};
export const deCreaseValue = (
  index: number,
  value: any,
  onChange: (value: any, name?: string) => void
) => {
  const newValue = value.map((item: any, _index: number) => {
    if (index == _index) {
      return { ...item, value: item.value - 1 };
    }
    return item;
  });

  onChange(newValue);
};
