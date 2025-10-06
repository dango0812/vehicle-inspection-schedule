import WiperIcon from '@assets/icons/icon-wiper.svg?react';
import EngineOilIcon from '@assets/icons/icon-engine-oil.svg?react';

export const icons = {
    wiper: WiperIcon,
    engineOil: EngineOilIcon
} as const;

export type IconType = keyof typeof icons;
