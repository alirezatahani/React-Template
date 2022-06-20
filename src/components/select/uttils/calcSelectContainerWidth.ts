export const calcContainerWidth = (width:string) => {
    if (width.includes('%')) return width;
    const toArray = width.split('px');
    const containerWidth = Number(toArray[0]) + 40 + 'px'; //cause of menuList padding
    return containerWidth;
  };