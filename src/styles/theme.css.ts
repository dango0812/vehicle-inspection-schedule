import { createGlobalThemeContract, createGlobalTheme } from '@vanilla-extract/css';

import tokens, { type Tokens } from './tokens';

const ALL_SEMANTIC_TAGS = 'html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video';

const setHeadingStyles = (
    size: keyof Tokens['font']['size'],
    weight: keyof Tokens['font']['weight'],
    lineHeight: keyof Tokens['font']['lineHeight'],
    letterSpacing: keyof Tokens['font']['letterSpacing']
) => ({
    fontSize: vars.font.size[size],
    fontWeight: vars.font.weight[weight],
    lineHeight: vars.font.lineHeight[lineHeight],
    letterSpacing: vars.font.letterSpacing[letterSpacing]
});

const getNs = (_v: string | null, path: readonly string[]) => `${path.join('-')}`;
const vars = createGlobalThemeContract(tokens, getNs);

createGlobalTheme(':root', vars, tokens);

export {
    ALL_SEMANTIC_TAGS,
    vars,
    setHeadingStyles
};
