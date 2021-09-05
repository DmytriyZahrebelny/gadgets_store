import { FC } from 'react';

import { iconsConfig } from './icons-config';
import { ChildrenProps, IconProps } from './icon.types';

export const Icon = ({ name, color, size, className }: IconProps) => {
  const IconComponent: FC<ChildrenProps> = iconsConfig[name];
  return <IconComponent color={color} size={size} className={className} />;
};
