import { iconsConfig } from './icons-config';

type SizeProps = {
  width: number;
  height: number;
};

export type ChildrenProps = {
  color?: string | undefined;
  size?: SizeProps | undefined;
  className?: string | undefined;
};

export type IconProps = {
  name: keyof typeof iconsConfig;
} & ChildrenProps;
