import type { ComponentProps } from 'react';
import clsx from 'clsx';
import { Condition } from '../condition';
import { Icons } from '../icons';
import { getInitials } from './lib';
import styles from './styles.module.scss';

interface AvatarProps extends ComponentProps<'img'> {
  variant?: 'circle' | 'square';
  text?: string;
  size?: number;
}

export const Avatar = ({ src, variant = 'circle', size = 24, text, ...props }: AvatarProps) => (
  <div
    className={clsx(styles.avatar, variant && styles[variant], !text && !src && styles.iconPlaceholder)}
    style={{ '--avatar-size': `${size}px`, ...props.style } as React.CSSProperties}
  >
    <Condition
      else={
        <Condition else={<Icons.User className={styles.icon} height='none' width='none' />} then={getInitials(text!)} value={text} />
      }
      then={<img className={styles.img} src={src} {...props} />}
      value={src}
    />
  </div>
);
