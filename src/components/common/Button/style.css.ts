import { style, createVar } from '@vanilla-extract/css';
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';
import tokens from '@styles/tokens';

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
        borderRadius: tokens.radius.sm,
        padding: `${tokens.padding.p6} ${tokens.padding.p12}`,
        transition: 'all 300ms ease-in-out'
    },
    variants: {
        variant: {
            solid: {
                ':disabled': {
                    color: tokens.color.grey400,
                    backgroundColor: tokens.color.greyOpacity300,
                    cursor: 'not-allowed'
                }
            },
            soft: {
                ':disabled': {
                    color: tokens.color.grey400,
                    backgroundColor: tokens.color.greyOpacity300,
                    cursor: 'not-allowed'
                }
            }
        },
        color: {
            black: {
                color: tokens.color.white
            },
            grey: {
                color: tokens.color.grey700
            },
            blue: {
                color: tokens.color.blue700
            },
            orange: {
                color: tokens.color.orange700

            },
            red: {
                color: tokens.color.red700
            },
            green: {
                color: tokens.color.green700
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
                backgroundColor: tokens.color.black,
                ':hover': {
                    backgroundColor: tokens.color.blackOpacity800
                },
                ':active': {
                    backgroundColor: tokens.color.blackOpacity800
                }
            }
        },
        {
            variants: {
                color: 'grey',
                variant: 'solid'
            },
            style: {
                backgroundColor: tokens.color.grey200,
                ':hover': {
                    backgroundColor: tokens.color.grey300
                },
                ':active': {
                    backgroundColor: tokens.color.grey300
                }
            }
        },
        {
            variants: {
                color: 'blue',
                variant: 'solid'
            },
            style: {
                backgroundColor: tokens.color.blue200,
                ':hover': {
                    backgroundColor: tokens.color.blue300
                },
                ':active': {
                    backgroundColor: tokens.color.blue300
                }
            }
        },
        {
            variants: {
                color: 'orange',
                variant: 'solid'
            },
            style: {
                backgroundColor: tokens.color.orange200,
                ':hover': {
                    backgroundColor: tokens.color.orange300
                },
                ':active': {
                    backgroundColor: tokens.color.orange300
                }
            }
        },
        {
            variants: {
                color: 'red',
                variant: 'solid'
            },
            style: {
                backgroundColor: tokens.color.red200,
                ':hover': {
                    backgroundColor: tokens.color.red300
                },
                ':active': {
                    backgroundColor: tokens.color.red300
                }
            }
        },
        {
            variants: {
                color: 'green',
                variant: 'solid'
            },
            style: {
                backgroundColor: tokens.color.green200,
                ':hover': {
                    backgroundColor: tokens.color.green300
                },
                ':active': {
                    backgroundColor: tokens.color.green300
                }
            }
        },
        {
            variants: {
                color: 'black',
                variant: 'soft'
            },
            style: {
                backgroundColor: tokens.color.blackOpacity800,
                ':hover': {
                    backgroundColor: tokens.color.black
                },
                ':active': {
                    backgroundColor: tokens.color.black
                }
            }
        },
        {
            variants: {
                color: 'grey',
                variant: 'soft'
            },
            style: {
                backgroundColor: tokens.color.grey100,
                ':hover': {
                    backgroundColor: tokens.color.grey200
                },
                ':active': {
                    backgroundColor: tokens.color.grey200
                }
            }
        },
        {
            variants: {
                color: 'blue',
                variant: 'soft'
            },
            style: {
                backgroundColor: tokens.color.blue100,
                ':hover': {
                    backgroundColor: tokens.color.blue200
                },
                ':active': {
                    backgroundColor: tokens.color.blue200
                }
            }
        },
        {
            variants: {
                color: 'orange',
                variant: 'soft'
            },
            style: {
                backgroundColor: tokens.color.orange100,
                ':hover': {
                    backgroundColor: tokens.color.orange200
                },
                ':active': {
                    backgroundColor: tokens.color.orange200
                }
            }
        },
        {
            variants: {
                color: 'red',
                variant: 'soft'
            },
            style: {
                backgroundColor: tokens.color.red100,
                ':hover': {
                    backgroundColor: tokens.color.red200
                },
                ':active': {
                    backgroundColor: tokens.color.red200
                }
            }
        },
        {
            variants: {
                color: 'green',
                variant: 'soft'
            },
            style: {
                backgroundColor: tokens.color.green100,
                ':hover': {
                    backgroundColor: tokens.color.green200
                },
                ':active': {
                    backgroundColor: tokens.color.green200
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
    fontSize: tokens.font.size.s16,
    fontWeight: tokens.font.weight.semiBold,
    lineHeight: tokens.font.lineHeight.medium,
    letterSpacing: tokens.font.letterSpacing.normal,
    visibility: textVisibleVar
});

export const loadingWrapper = style({
    position: 'absolute'
});

export type ButtonVariants = RecipeVariants<typeof buttonStyle>;
