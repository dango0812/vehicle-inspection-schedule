import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';
import tokens from '@styles/tokens';

export const cardStyle = recipe({
    base: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        border: 'none',
        borderRadius: tokens.radius.xl,
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
                backgroundColor: tokens.color.grey100
            },
            blue: {
                backgroundColor: tokens.color.blue100
            },
            orange: {
                backgroundColor: tokens.color.orange100
            },
            red: {
                backgroundColor: tokens.color.red100
            },
            green: {
                backgroundColor: tokens.color.green100
            }
        },
        size: {
            sm: {
                padding: tokens.padding.p16
            },
            md: {
                padding: tokens.padding.p20
            },
            lg: {
                padding: tokens.padding.p24
            }
        },
        shadow: {
            sm: {
                boxShadow: tokens.shadow.sm
            },
            md: {
                boxShadow: tokens.shadow.md
            },
            lg: {
                boxShadow: tokens.shadow.lg
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
                border: `1px solid ${tokens.color.grey100}`
            }
        },
        {
            variants: {
                color: 'blue',
                variant: 'outlined'
            },
            style: {
                border: `1px solid ${tokens.color.blue100}`
            }
        },
        {
            variants: {
                color: 'orange',
                variant: 'outlined'
            },
            style: {
                border: `1px solid ${tokens.color.orange100}`
            }
        },
        {
            variants: {
                color: 'red',
                variant: 'outlined'
            },
            style: {
                border: `1px solid ${tokens.color.red100}`
            }
        },
        {
            variants: {
                color: 'green',
                variant: 'outlined'
            },
            style: {
                border: `1px solid ${tokens.color.green100}`
            }
        },
        {
            variants: {
                color: 'grey',
                variant: 'soft'
            },
            style: {
                border: `1px solid ${tokens.color.grey100}`,
                backgroundColor: tokens.color.greyOpacity50
            }
        },
        {
            variants: {
                color: 'blue',
                variant: 'soft'
            },
            style: {
                border: `1px solid ${tokens.color.blue100}`,
                backgroundColor: tokens.color.blueOpacity50
            }
        },
        {
            variants: {
                color: 'orange',
                variant: 'soft'
            },
            style: {
                border: `1px solid ${tokens.color.orange100}`,
                backgroundColor: tokens.color.orangeOpacity50
            }
        },
        {
            variants: {
                color: 'red',
                variant: 'soft'
            },
            style: {
                border: `1px solid ${tokens.color.red100}`,
                backgroundColor: tokens.color.redOpacity50
            }
        },
        {
            variants: {
                color: 'green',
                variant: 'soft'
            },
            style: {
                border: `1px solid ${tokens.color.green100}`,
                backgroundColor: tokens.color.greenOpacity50
            }
        },
        {
            variants: {
                color: 'grey',
                variant: 'solid'
            },
            style: {
                backgroundColor: tokens.color.grey100
            }
        },
        {
            variants: {
                color: 'blue',
                variant: 'solid'
            },
            style: {
                backgroundColor: tokens.color.blue100
            }
        },
        {
            variants: {
                color: 'orange',
                variant: 'solid'
            },
            style: {
                backgroundColor: tokens.color.orange100
            }
        },
        {
            variants: {
                color: 'red',
                variant: 'solid'
            },
            style: {
                backgroundColor: tokens.color.red100
            }
        },
        {
            variants: {
                color: 'green',
                variant: 'solid'
            },
            style: {
                backgroundColor: tokens.color.green100
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
