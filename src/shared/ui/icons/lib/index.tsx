import type { ComponentProps, JSX, ReactElement } from 'react';

interface IconProps extends ComponentProps<'svg'> {
  className?: string;
  fill?: string;
  size?: number;
}
export type IconType = (props: IconProps) => ReactElement | null;

export const withDefaultProps =
  (Icon: IconType) =>
    ({ size, ...props }: IconProps): JSX.Element => <Icon size={size} {...props} />;
