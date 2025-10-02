import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';
import { vars } from '@styles/theme.css';

export const cardStyle = recipe({
    base: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        border: 'none',
        borderRadius: vars.radius.xl,
        outline: 'none'
    },
    variants: {
        variant: {
            outlined: {
                backgroundColor: 'inherit !important'
            },
            solid: {
                backgroundColor: 'inherit'
            },
            soft: {
                backgroundColor: 'inherit'
            }
        },
        color: {
            grey: {
                backgroundColor: vars.color.grey100
            },
            blue: {
                backgroundColor: vars.color.blue100
            },
            orange: {
                backgroundColor: vars.color.orange100
            },
            red: {
                backgroundColor: vars.color.red100
            },
            green: {
                backgroundColor: vars.color.green100
            }
        },
        size: {
            sm: {
                padding: vars.padding.p16
            },
            md: {
                padding: vars.padding.p20
            },
            lg: {
                padding: vars.padding.p24
            }
        },
        shadow: {
            sm: {
                boxShadow: vars.shadow.sm
            },
            md: {
                boxShadow: vars.shadow.md
            },
            lg: {
                boxShadow: vars.shadow.lg
            }
        }
    },
    compoundVariants: [
        {
            variants: {
                color: 'grey',
                variant: 'outlined'
            },
            style: {
                border: `1px solid ${vars.color.grey100}`
            }
        },
        {
            variants: {
                color: 'blue',
                variant: 'outlined'
            },
            style: {
                border: `1px solid ${vars.color.blue100}`
            }
        },
        {
            variants: {
                color: 'orange',
                variant: 'outlined'
            },
            style: {
                border: `1px solid ${vars.color.orange100}`
            }
        },
        {
            variants: {
                color: 'red',
                variant: 'outlined'
            },
            style: {
                border: `1px solid ${vars.color.red100}`
            }
        },
        {
            variants: {
                color: 'green',
                variant: 'outlined'
            },
            style: {
                border: `1px solid ${vars.color.green100}`
            }
        },
        {
            variants: {
                color: 'grey',
                variant: 'soft'
            },
            style: {
                border: `1px solid ${vars.color.grey100}`,
                backgroundColor: vars.color.greyOpacity50
            }
        },
        {
            variants: {
                color: 'blue',
                variant: 'soft'
            },
            style: {
                border: `1px solid ${vars.color.blue100}`,
                backgroundColor: vars.color.blueOpacity50
            }
        },
        {
            variants: {
                color: 'orange',
                variant: 'soft'
            },
            style: {
                border: `1px solid ${vars.color.orange100}`,
                backgroundColor: vars.color.orangeOpacity50
            }
        },
        {
            variants: {
                color: 'red',
                variant: 'soft'
            },
            style: {
                border: `1px solid ${vars.color.red100}`,
                backgroundColor: vars.color.redOpacity50
            }
        },
        {
            variants: {
                color: 'green',
                variant: 'soft'
            },
            style: {
                border: `1px solid ${vars.color.green100}`,
                backgroundColor: vars.color.greenOpacity50
            }
        },
        {
            variants: {
                color: 'grey',
                variant: 'solid'
            },
            style: {
                backgroundColor: vars.color.grey100
            }
        },
        {
            variants: {
                color: 'blue',
                variant: 'solid'
            },
            style: {
                backgroundColor: vars.color.blue100
            }
        },
        {
            variants: {
                color: 'orange',
                variant: 'solid'
            },
            style: {
                backgroundColor: vars.color.orange100
            }
        },
        {
            variants: {
                color: 'red',
                variant: 'solid'
            },
            style: {
                backgroundColor: vars.color.red100
            }
        },
        {
            variants: {
                color: 'green',
                variant: 'solid'
            },
            style: {
                backgroundColor: vars.color.green100
            }
        }
    ],
    defaultVariants: {
        variant: 'solid',
        color: 'grey',
        size: 'md',
        shadow: 'md'
    }
});

export type CardVariants = RecipeVariants<typeof cardStyle>;
