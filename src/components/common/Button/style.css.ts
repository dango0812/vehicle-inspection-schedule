import { style, createVar } from '@vanilla-extract/css';
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';
import { vars } from '@styles/theme.css';

export const textVisibleVar = createVar();

export const buttonStyle = recipe({
    base: {
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none',
        outline: 'none',
        userSelect: 'none',
        cursor: 'pointer',
        borderRadius: vars.radius.sm,
        padding: `${vars.padding.p6} ${vars.padding.p12}`,
        transition: 'all 300ms ease-in-out'
    },
    variants: {
        variant: {
            solid: {
                ':disabled': {
                    color: vars.color.grey400,
                    backgroundColor: vars.color.greyOpacity300,
                    cursor: 'not-allowed'
                }
            },
            soft: {
                ':disabled': {
                    color: vars.color.grey400,
                    backgroundColor: vars.color.greyOpacity300,
                    cursor: 'not-allowed'
                }
            }
        },
        color: {
            black: {
                color: vars.color.white
            },
            grey: {
                color: vars.color.grey700
            },
            blue: {
                color: vars.color.blue700
            },
            orange: {
                color: vars.color.orange700

            },
            red: {
                color: vars.color.red700
            },
            green: {
                color: vars.color.green700
            }
        },
        size: {
            sm: {
                height: '32px'
            },
            md: {
                height: '40px'
            },
            lg: {
                height: '48px'
            }
        },
        fullWidth: {
            true: {
                width: '100%'
            },
            false: {}
        },
        loading: {
            true: {
                opacity: 0.8,
                backgroundColor: 'inherit',
                ':active': {
                    backgroundColor: 'inherit'
                },
                ':hover': {
                    backgroundColor: 'inherit'
                },
                cursor: 'not-allowed'
            },
            false: {}
        }
    },
    compoundVariants: [
        {
            variants: {
                color: 'black',
                variant: 'solid'
            },
            style: {
                backgroundColor: vars.color.black,
                ':hover': {
                    backgroundColor: vars.color.blackOpacity800
                },
                ':active': {
                    backgroundColor: vars.color.blackOpacity800
                }
            }
        },
        {
            variants: {
                color: 'grey',
                variant: 'solid'
            },
            style: {
                backgroundColor: vars.color.grey200,
                ':hover': {
                    backgroundColor: vars.color.grey300
                },
                ':active': {
                    backgroundColor: vars.color.grey300
                }
            }
        },
        {
            variants: {
                color: 'blue',
                variant: 'solid'
            },
            style: {
                backgroundColor: vars.color.blue200,
                ':hover': {
                    backgroundColor: vars.color.blue300
                },
                ':active': {
                    backgroundColor: vars.color.blue300
                }
            }
        },
        {
            variants: {
                color: 'orange',
                variant: 'solid'
            },
            style: {
                backgroundColor: vars.color.orange200,
                ':hover': {
                    backgroundColor: vars.color.orange300
                },
                ':active': {
                    backgroundColor: vars.color.orange300
                }
            }
        },
        {
            variants: {
                color: 'red',
                variant: 'solid'
            },
            style: {
                backgroundColor: vars.color.red200,
                ':hover': {
                    backgroundColor: vars.color.red300
                },
                ':active': {
                    backgroundColor: vars.color.red300
                }
            }
        },
        {
            variants: {
                color: 'green',
                variant: 'solid'
            },
            style: {
                backgroundColor: vars.color.green200,
                ':hover': {
                    backgroundColor: vars.color.green300
                },
                ':active': {
                    backgroundColor: vars.color.green300
                }
            }
        },
        {
            variants: {
                color: 'black',
                variant: 'soft'
            },
            style: {
                backgroundColor: vars.color.blackOpacity800,
                ':hover': {
                    backgroundColor: vars.color.black
                },
                ':active': {
                    backgroundColor: vars.color.black
                }
            }
        },
        {
            variants: {
                color: 'grey',
                variant: 'soft'
            },
            style: {
                backgroundColor: vars.color.grey100,
                ':hover': {
                    backgroundColor: vars.color.grey200
                },
                ':active': {
                    backgroundColor: vars.color.grey200
                }
            }
        },
        {
            variants: {
                color: 'blue',
                variant: 'soft'
            },
            style: {
                backgroundColor: vars.color.blue100,
                ':hover': {
                    backgroundColor: vars.color.blue200
                },
                ':active': {
                    backgroundColor: vars.color.blue200
                }
            }
        },
        {
            variants: {
                color: 'orange',
                variant: 'soft'
            },
            style: {
                backgroundColor: vars.color.orange100,
                ':hover': {
                    backgroundColor: vars.color.orange200
                },
                ':active': {
                    backgroundColor: vars.color.orange200
                }
            }
        },
        {
            variants: {
                color: 'red',
                variant: 'soft'
            },
            style: {
                backgroundColor: vars.color.red100,
                ':hover': {
                    backgroundColor: vars.color.red200
                },
                ':active': {
                    backgroundColor: vars.color.red200
                }
            }
        },
        {
            variants: {
                color: 'green',
                variant: 'soft'
            },
            style: {
                backgroundColor: vars.color.green100,
                ':hover': {
                    backgroundColor: vars.color.green200
                },
                ':active': {
                    backgroundColor: vars.color.green200
                }
            }
        }
    ],
    defaultVariants: {
        size: 'md',
        color: 'black',
        variant: 'solid',
        fullWidth: false
    }
});

export const buttonTextStyle = style({
    fontSize: vars.font.size.s16,
    fontWeight: vars.font.weight.semiBold,
    lineHeight: vars.font.lineHeight.medium,
    letterSpacing: vars.font.letterSpacing.normal,
    visibility: textVisibleVar
});

export const loadingWrapper = style({
    position: 'absolute'
});

export type ButtonVariants = RecipeVariants<typeof buttonStyle>;
