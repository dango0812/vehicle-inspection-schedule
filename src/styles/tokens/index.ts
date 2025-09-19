import font from './font';
import colors from './colors';
import radius from './radius';
import breakpoints from './breakpoints';
import { gap, padding, margin } from './spacing';
import shadow from './shadow';

const tokens = {
    color: colors,
    font,
    radius,
    breakpoints,
    gap,
    padding,
    margin,
    shadow
} as const;

export default tokens;
export type Tokens = typeof tokens;
