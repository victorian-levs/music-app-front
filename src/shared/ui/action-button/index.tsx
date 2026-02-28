import type { ComponentProps } from 'react';
import clsx from 'clsx';
import { Icons } from '../icons';
import styles from './styles.module.scss';

type ActionButtonVariants = 'filled' | 'transparent';

interface ActionButtonProps extends ComponentProps<'button'> {
  variant?: ActionButtonVariants;
  name: keyof typeof Icons;
  size?: number;
}

export const ActionButton = ({
  variant = 'filled',
  size = 24,
  className,
  disabled,
  style,
  name,
  ...props
}: ActionButtonProps) => {
  const Icon = Icons[name];

  return (
    <button
      className={clsx(className, styles.button, styles[variant], disabled && styles.disabled)}
      style={{ ['--btn-size' as string]: `${size}px`, ...style }}
      aria-label={props['aria-label'] ?? name}
      disabled={disabled}
      type='button'
      {...props}
    >
      <Icon className={styles.icon} height='none' width='none' />
    </button>
  );
};
