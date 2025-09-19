import { forwardRef } from 'react';
import clsx from 'clsx';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import CircleProgress from '@assets/animation/animation-circle-progress.svg?react';
import { buttonStyle, buttonTextStyle, loadingWrapper, textVisibleVar, type ButtonVariants } from './style.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
    variant?: NonNullable<ButtonVariants>['variant'];
    color?: NonNullable<ButtonVariants>['color'];
    size?: NonNullable<ButtonVariants>['size'];
    fullWidth?: boolean;
    loading?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({
        children,
        className,
        variant = 'soft',
        color = 'grey',
        size = 'md',
        fullWidth = false,
        loading = false,
        onClick,
        ...rest
    }, ref) => {
        const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            if (loading) {
                e.preventDefault();
                e.stopPropagation();
                return;
            }

            onClick?.(e);
        };

        return (
            <button
                ref={ref}
                role="button"
                type="button"
                className={clsx(buttonStyle({ variant, color, size, fullWidth, loading }), className)}
                onClick={handleClick}
                {...rest}
            >
                {loading && (
                    <span className={loadingWrapper}>
                        <CircleProgress />
                    </span>
                )}

                <p
                    className={buttonTextStyle}
                    style={assignInlineVars({
                        [textVisibleVar]: loading ? 'hidden' : 'visible'
                    })}
                >
                    {children}
                </p>
            </button>
        );
    }
);
