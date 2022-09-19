export type TColor = 'primary' | 'success' | 'warning' | 'danger' | 'info';

export enum EColor {
  PRIMARY = 'primary',
  SUCCESS = 'success',
  WARNING = 'warning',
  DANGER = 'danger',
  INFO = 'info',
}

export const BgColor = {
  [EColor.PRIMARY]: 'bg-blue-700',
  [EColor.SUCCESS]: 'bg-green-600',
  [EColor.WARNING]: 'bg-yellow-300',
  [EColor.DANGER]: 'bg-red-700',
  [EColor.INFO]: 'bg-blue-400',
};

export const BorderColor = {
  [EColor.PRIMARY]: 'border-blue-700',
  [EColor.SUCCESS]: 'border-green-600',
  [EColor.WARNING]: 'border-yellow-300',
  [EColor.DANGER]: 'border-red-700',
  [EColor.INFO]: 'border-blue-400',
};

export const TextColor = {
  [EColor.PRIMARY]: 'text-blue-700',
  [EColor.SUCCESS]: 'text-green-600',
  [EColor.WARNING]: 'text-yellow-300',
  [EColor.DANGER]: 'text-red-700',
  [EColor.INFO]: 'text-blue-400',
};

export default { BgColor, BorderColor, TextColor };
