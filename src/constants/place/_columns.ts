import BASE from './_base';
import CONVERSIONS, { type BaseConversions } from './_conversions';
import {
  GRID_COLUMN_IDENTIFIER,
  GRID_OFFSET_IDENTIFIER,
  LARGE_COLUMNS,
  MEDIUM_COLUMNS,
  SMALL_COLUMNS
} from './_scss-variables';

interface ColumnCount {
  LARGE: number;
  MEDIUM: number;
  SMALL: number;
}

interface ColumnsConstants {
  SEP: string;
  COL_SEP: string;
  COLUMN_CLASS_PREFIX: string;
  OFFSET_CLASS_PREFIX: string;
  COUNT: ColumnCount;
  FRACTIONS: BaseConversions;
}

// Match the column variables from the framework if redeclaring from defaults (e.g $large-columns, $medium-columns, $small-columns)
const COLUMNS: ColumnsConstants = {
  SEP: BASE.SEP,
  COL_SEP: BASE.FRAC_SEP,
  COLUMN_CLASS_PREFIX: GRID_COLUMN_IDENTIFIER,
  OFFSET_CLASS_PREFIX: GRID_OFFSET_IDENTIFIER,
  COUNT: {
    LARGE: LARGE_COLUMNS,
    MEDIUM: MEDIUM_COLUMNS,
    SMALL: SMALL_COLUMNS
  },
  FRACTIONS: CONVERSIONS.BASE
};

export default COLUMNS;