import { THEME } from '../types';

const handlers = {
  [THEME]: (state: any, payload: any) => ({ ...state, value: payload.value }),
  DEFAULT: (state: any) => state,
};

export const ThemeReducer = (state: any, action: any) => {
  const handle = handlers[action.type as keyof typeof handlers] || handlers.DEFAULT;

  return handle(state, action);
};
