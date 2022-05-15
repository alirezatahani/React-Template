import { theme } from '../../../global/Global';

export const handleTheme = (themeName: string): string => {
  if (!isThemeValid(themeName)) {
    throw new Error(
      `Toggle theme must be one of [${Object.keys(theme.colors).join(', ')}]`
    );
  }
  return theme.colors[themeName];
};

function isThemeValid(
  themeName: string
): themeName is keyof typeof theme.colors {
  return themeName in theme.colors;
}

export const calculateContainerHeight = (
  size: number,
  indent: number
): string => {
  return size / 2 + indent + 'px';
};

export const calculateSliderSize = (size: number, indent: number): string => {
  return size / 2 - indent + 'px';
};
