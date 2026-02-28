import type { ComponentProps, ElementType } from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

type ButtonVariants =
  | 'filled-green-lg'
  | 'filled-green-md'
  | 'filled-green-sm'
  | 'filled-white-lg'
  | 'filled-white-md'
  | 'filled-white-sm'
  | 'outlined-lg'
  | 'outlined-md'
  | 'outlined-sm'
  | 'text'
  | 'unstyled';

interface ButtonOwnProps<T> {
  variant?: ButtonVariants;
  disabled?: boolean;
  loading?: boolean;
  as?: T;
}

type ButtonProps<T extends ElementType = 'button'> = ButtonOwnProps<T> & Omit<ComponentProps<T>, keyof ButtonOwnProps<T>>;

export const Button = <T extends ElementType = 'button'>({
  variant = 'filled-white-md',
  className,
  children,
  disabled,
  loading,
  as,
  ...props
}: ButtonProps<T>) => {
  const isDisabled = loading || disabled;
  const Component = as || 'button';

  const defaultButtonProps = {
    type: 'button' as const,
    disabled
  };

  return (
    <Component
      className={clsx(className, styles.button, styles[variant], isDisabled && styles.disabled)}
      {...(Component === 'button' ? defaultButtonProps : {})}
      {...props}
    >
      {loading ? 'Подождите...' : children}
    </Component>
  );
};

// TODO: Добавить Spinner с плавным появлением на кнопку лаконично (native/motion)
