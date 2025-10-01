import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';
import tokens from '@styles/tokens';

const flexProperties = defineProperties({
    properties: {
        display: ['flex'],
        flexDirection: ['row', 'column', 'row-reverse', 'column-reverse'],
        flexWrap: ['nowrap', 'wrap', 'wrap-reverse'],
        justifyContent: ['normal', 'flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'],
        alignItems: ['normal', 'stretch', 'flex-start', 'flex-end', 'center', 'baseline'],
        alignContent: ['normal', 'stretch', 'flex-start', 'flex-end', 'center', 'space-between'],
        alignSelf: ['auto', 'flex-start', 'flex-end', 'center', 'stretch'],
        gap: tokens.gap,
        flex: ['none', 'auto', 'initial', '1'],
        flexGrow: [0, 1, 2],
        flexBasis: ['auto', 'min-content', 'max-content', 'content', 'fit-content'],
        flexShrink: [0, 1, 2]
    }
});

export const sprinkles = createSprinkles(flexProperties);

export type FlexboxSprinkles = Parameters<typeof sprinkles>[0];
