import { forwardRef } from 'react';
import clsx from 'clsx';
import { sprinkles, type FlexboxSprinkles } from './sprinkles.css';

export interface FlexboxProps extends React.HTMLAttributes<HTMLDivElement>, FlexboxSprinkles {
    children: React.ReactNode;
    className?: string;
}

export const Flexbox = forwardRef<HTMLDivElement, FlexboxProps>(
    ({
        children,
        className,
        flexDirection = 'column',
        flexWrap,
        justifyContent,
        alignItems,
        alignContent,
        alignSelf,
        gap,
        flex,
        flexGrow,
        flexShrink,
        ...rest
    }, ref) => (
        <div
            ref={ref}
            className={clsx(sprinkles({ display: 'flex', flexDirection, flexWrap, justifyContent, alignItems, alignContent, alignSelf, gap, flex, flexGrow, flexShrink }), className)}
            {...rest}
        >
            {children}
        </div>
    )
);
