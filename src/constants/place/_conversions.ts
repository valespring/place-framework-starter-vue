import { QUICK_GRID_WIDTHS } from './_scss-variables';

export interface BaseConversions {
  full: number;
  half: number;
  third: number;
  quarter: number;
  fifth: number;
}

export interface PluralConversions {
  halves: number;
  thirds: number;
  quarters: number;
  fifths: number;
}

export interface ConversionsConstants {
  BASE: BaseConversions;
  PLURAL: PluralConversions;
}

// Use SCSS-exported fractions instead of hardcoded calculations
const BASE: BaseConversions = {
  full: QUICK_GRID_WIDTHS.full,
  half: QUICK_GRID_WIDTHS.half,
  third: QUICK_GRID_WIDTHS.third,
  quarter: QUICK_GRID_WIDTHS.quarter,
  fifth: QUICK_GRID_WIDTHS.fifth
};

const CONVERSIONS: ConversionsConstants = {
  BASE,
  PLURAL: {
    halves: BASE.half,
    thirds: BASE.third,
    quarters: BASE.quarter,
    fifths: BASE.fifth
  }
};

export default CONVERSIONS;