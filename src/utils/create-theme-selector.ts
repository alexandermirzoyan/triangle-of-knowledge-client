export const createThemeSelector = ({
  color,
}: {
  color: Record<string, string>;
}) => Object.entries(color)
  .map(([colorKey, colorValue]) => ({ [colorKey]: colorValue }))
  .reduce((obj, item) => Object.assign(obj, item), {});
