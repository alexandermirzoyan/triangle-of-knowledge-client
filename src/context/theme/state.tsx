import { useMemo, useReducer } from 'react';
import { ThemeEnum } from '@/enums';
import { THEME } from '../types';
import { ThemeReducer } from './reducer';
import { ThemeContext } from './context';

export const ThemeState = ({ children }: {children: any}) => {
  const [theme, dispatch] = useReducer(ThemeReducer, { value: ThemeEnum.DARK });

  const themeHandler = (value: string) => {
    dispatch({
      type: THEME,
      value,
    });
  };

  return <ThemeContext.Provider value={useMemo(() => ({ themeHandler, theme }), [theme])}>{children}</ThemeContext.Provider>;
};
