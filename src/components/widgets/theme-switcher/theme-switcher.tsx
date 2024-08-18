import { ThemeContext } from '@/context/theme/context';
import { ThemeEnum } from '@/enums';
import { memo, useCallback, useContext } from 'react';

const ThemeSwitcher = () => {
  const { themeHandler } = useContext(ThemeContext);

  const onThemeChange = useCallback(
    (value: ThemeEnum) => {
      themeHandler(value);
    },
    [themeHandler],
  );

  return (
    <div className='flex items-center gap-2'>
      <button className='dark:text-white' onClick={() => onThemeChange(ThemeEnum.DARK)}>Dark</button>
      <button className='dark:text-white' onClick={() => onThemeChange(ThemeEnum.LIGHT)!}>Light</button>
    </div>
  );
};

export const ThemeSwitcherMemoized = memo(ThemeSwitcher);
