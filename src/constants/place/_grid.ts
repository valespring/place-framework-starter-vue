import BASE from './_base';
import CONVERSIONS, { type PluralConversions } from './_conversions';
import {
  GRID_GAP_MODIFIER,
  CSS_GRID_IDENTIFIER
} from './_scss-variables';

interface GridModifiers {
  SPACED: string;
}

interface GridConstants {
  SEP: string;
  CLASS_PREFIX: string;
  MODIFIERS: GridModifiers;
  FRACTIONS: PluralConversions;
}

const GRID: GridConstants = {
  SEP: BASE.SEP,
  CLASS_PREFIX: CSS_GRID_IDENTIFIER,
  MODIFIERS: {
    SPACED: GRID_GAP_MODIFIER
  },
  FRACTIONS: CONVERSIONS.PLURAL
};

export default GRID;