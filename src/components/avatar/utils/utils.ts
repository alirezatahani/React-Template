export const AbbreviateText = (value: string) => {
  const arr = value.split(' ');
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  const str2 = arr.join('');
  const onlyUpper1 = str2.replace(/[a-z]/g, '');
  return onlyUpper1;
};
