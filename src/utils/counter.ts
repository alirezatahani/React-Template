export const increaseValue = (state: any, setState: any, value: string) => {
  setState((prevState: any) => ({
    ...prevState,
    [value]: Number(prevState[value]) + 1,
  }));

  return state;
};
export const decreaseValue = (state: any, setState: any, value: string) => {
  setState((prevState: any) => ({
    ...prevState,
    [value]: Number(prevState[value]) - 1,
  }));

  return state;
};
