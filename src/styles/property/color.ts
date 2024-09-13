export const color = {
  primary: '#FF4D35',
  text: '#1E1E1E',
  base: '#14142C',
  sub_primary: '#07A9AC',
  outline: '#F9F8FF',
  hint: '#A9A9A9',
  placeholder: '#CCCCCC',
} as const;

export type ColorType = typeof color;
