import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';
import { vars } from '@styles/theme.css';

export const iconStyle = recipe({
    base: {
        display: 'inline-block',
        verticalAlign: 'middle',
        fill: 'currentColor'
    },
    variants: {
        color: {
            white: { color: vars.color.white },
            black: { color: vars.color.black },
            red: { color: vars.color.red700 },
            grey: { color: vars.color.grey700 },
            blue: { color: vars.color.blue700 },
            orange: { color: vars.color.orange700 },
            green: { color: vars.color.green700 },
            teal: { color: vars.color.teal700 },
            purple: { color: vars.color.purple700 },
            warning: { color: vars.color.yellow700 }
        }
    },
    defaultVariants: {
        color: 'black'
    }
});

export type IconVariants = RecipeVariants<typeof iconStyle>;
