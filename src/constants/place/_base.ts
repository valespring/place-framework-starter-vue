import { GRID_PATTERN_SEPARATOR } from './_scss-variables';

interface BaseConstants {
  EL: string;
  FRAC_SEP: string;
  SEP: string;
}

const BASE: BaseConstants = {
  EL: 'div',
  FRAC_SEP: GRID_PATTERN_SEPARATOR,
  SEP: GRID_PATTERN_SEPARATOR
};

export default BASE;