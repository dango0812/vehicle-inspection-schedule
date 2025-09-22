import { forwardRef } from 'react';
import clsx from 'clsx';
import { cardStyle, type CardVariants } from './style.css';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    variant?: NonNullable<CardVariants>['variant'];
    color?: NonNullable<CardVariants>['color'];
    size?: NonNullable<CardVariants>['size'];
    shadow?: NonNullable<CardVariants>['shadow'];
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
    ({
        children,
        className,
        variant = 'solid',
        color = 'grey',
        size = 'md',
        shadow = 'md',
        ...rest
    }, ref) => (
        <div
            ref={ref}
            className={clsx(cardStyle({ variant, color, size, shadow }), className)}
            {...rest}
        >
            {children}
        </div>
    )
);
