import { memo } from 'react';

import clsx from 'clsx';
import { iconStyle, type IconVariants } from './style.css';
import { icons, type IconType } from './types';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    name: IconType;
    size?: number;
    color?: NonNullable<IconVariants>['color'];
}

export const SvgIcon = memo(({
    className,
    name,
    size,
    color,
    ...props
}: IconProps) => {
    const Icon = icons[name];

    if (!Icon) {
        throw new Error(`Unregistered icon: ${name}`);
    }

    return (
        <Icon
            className={clsx(iconStyle({ color }), className)}
            width={size ?? 24}
            height={size ?? 24}
            {...props}
        />
    );
});
