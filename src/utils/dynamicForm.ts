export const addToArray = (state: any, setState: any) => {
  setState((prev: any) => [
    ...prev,
    {
      id: prev.length + 1,
    },
  ]);
  return state;
};

export const RemoveFromArray = (id: number, state: any, setState: any) => {
  setState((prevState: any) => {
    return prevState.reduce((result: any, current: any) => {
      if (current.id < id) {
        result.push(current);
      } else if (current.id > id) {
        result.push({ ...current, id: current.id - 1 });
      }
      return result;
    }, []);
  });
  return state;
};
