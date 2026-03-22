import type { ComponentProps, ReactNode } from 'react';
import clsx from 'clsx';
import { useId, useRef } from 'react';
import { PatternFormat } from 'react-number-format';
import { useForkRef } from '@/shared/lib';
import { Button } from '../button';
import { Condition } from '../condition';
import { Icons } from '../icons';
import { Tooltip } from '../tooltip';
import { Typography } from '../typography';
import styles from './styles.module.scss';

type InputTextVariants = 'default' | 'rounded';
type InputValue = number | string | undefined;

interface InputProps extends ComponentProps<'input'> {
  type?: 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url',
  variant?: InputTextVariants,
  defaultValue?: InputValue,
  beforeClassName?: string,
  inputClassName?: string,
  afterClassName?: string,
  errorMessage?: string,
  value?: InputValue,
  before?: ReactNode,
  phoneMask?: string,
  readOnly?: boolean,
  hasClear?: boolean,
  after?: ReactNode,
  label?: string,
}

const checkValueDefined = (value: InputValue) => {
  const isUndefined = value === undefined;
  const isNull = value === null;
  let isEmpty = false;

  if (typeof value === 'string') {
    isEmpty = !value.length;
  }

  return !isUndefined && !isNull && !isEmpty;
};

/*  ==== TODO: переделать на compound components ==== */
export const InputText = ({
  className,
  beforeClassName,
  afterClassName,
  inputClassName,
  errorMessage,
  phoneMask,
  disabled,
  readOnly,
  hasClear,
  onChange,
  variant,
  before,
  after,
  label,
  value,
  type,
  ref,
  ...props
}: InputProps) => {
  const inputId = useId();
  const innerRef = useRef<HTMLInputElement>(null);
  const handleRef = useForkRef(ref, innerRef);

  const isValueDefined = checkValueDefined(value);
  const isBlocked = readOnly || disabled || (isValueDefined && !onChange);
  const isClearControl = hasClear && !isBlocked && isValueDefined && onChange;
  const isInvalid = errorMessage && !isBlocked;
  const isPhone = type === 'tel';

  const handleClear = (event: React.MouseEvent<HTMLSpanElement>) => {
    const control = innerRef.current;

    if (control) {
      const syntheticEvent = Object.create(event);
      syntheticEvent.target = control;
      syntheticEvent.currentTarget = control;

      control.value = '';

      if (onChange) {
        onChange(syntheticEvent);
      }
    }
  };

  const inputProps = {
    value,
    disabled,
    readOnly,
    onChange,
    id: inputId
  };

  return (
    <Typography
      className={
        clsx(
          styles.wrapper,
          variant && styles[variant],
          isBlocked && styles.blocked,
          isInvalid && styles.invalid,
          isClearControl && styles.hasClear,
          className
        )}
      as='span'
    >
      {label && (
        <Typography className={styles.label} htmlFor={inputId} variant='label_S' as='label'>
          {label}
        </Typography>
      )}
      <span className={styles.field}>
        {before && <div className={beforeClassName}>{before}</div>}

        <Condition
          then={(
            <PatternFormat
              className={clsx(styles.input, inputClassName)}
              format={phoneMask || '+7(###)###-##-##'}
              getInputRef={handleRef}
              allowEmptyFormatting
              mask='_'
              {...inputProps}
              {...props}
            />
          )}
          else={(
            <input
              className={clsx(styles.input, inputClassName)}
              ref={handleRef}
              type={type}
              {...inputProps}
              {...props}
            />
          )}
          value={isPhone}
        />

        {after && <div className={afterClassName}>{after}</div>}

        {isClearControl && (
          <Button className={styles.clearButton} onClick={handleClear} variant='unstyled'>
            <Icons.Cross />
          </Button>
        )}

        {isInvalid && (
          <Tooltip className={styles.errorTooltip}>
            <Tooltip.Trigger>
              <Icons.Error />
            </Tooltip.Trigger>
            <Typography as={Tooltip.Content} variant='text_S'>{errorMessage}</Typography>
          </Tooltip>
        )}
      </span>
    </Typography>
  );
};
