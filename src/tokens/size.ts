export type TSize = 'small' | 'medium' | 'large';

export enum ESize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export const Height = {
  [ESize.SMALL]: 'h-8',
  [ESize.MEDIUM]: 'h-10',
  [ESize.LARGE]: 'h-12',
};

export const FontSize = {
  [ESize.SMALL]: 'text-sm',
  [ESize.MEDIUM]: 'text-base',
  [ESize.LARGE]: 'text-base',
};

export default { Height, FontSize };
