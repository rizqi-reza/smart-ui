export type TColor = 'primary' | 'success' | 'warning' | 'danger' | 'info';

export enum EColor {
  PRIMARY = 'primary',
  SUCCESS = 'success',
  WARNING = 'warning',
  DANGER = 'danger',
  INFO = 'info',
}

const Color = {
  [EColor.PRIMARY]: 'blue-700',
  [EColor.SUCCESS]: 'green-600',
  [EColor.WARNING]: 'yellow-300',
  [EColor.DANGER]: 'red-700',
  [EColor.INFO]: 'blue-400',
};

export default Color;
