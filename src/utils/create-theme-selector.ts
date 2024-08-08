export const createThemeSelector = ({
  color,
}: {
  color: Record<string, string>;
}) =>
  Object.entries(color)
    .map((keys) => ({
      [keys[0]]: keys[1],
    }))
    .reduce((obj, item) => Object.assign(obj, item), {});
