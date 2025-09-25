import BASE from './_base';
import {
  GRID_ROW_IDENTIFIER,
  GRID_FLEX_MODIFIER,
  GRID_RTL_MODIFIER,
  GRID_FLEX_FLUSH_MODIFIER
} from './_scss-variables';

interface RowModifiers {
  FLEX: string;
  RTL: string;
  FLUSH: string;
}

interface RowConstants {
  SEP: string;
  CLASS_PREFIX: string;
  MODIFIERS: RowModifiers;
}

const ROW: RowConstants = {
  SEP: BASE.SEP,
  CLASS_PREFIX: GRID_ROW_IDENTIFIER,
  MODIFIERS: {
    FLEX: GRID_FLEX_MODIFIER,
    RTL: GRID_RTL_MODIFIER,
    FLUSH: GRID_FLEX_FLUSH_MODIFIER
  }
};

export default ROW;