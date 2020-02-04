import React from 'react';
import makeClass from 'clsx';
import styles from './Button.css';

export type Element<
  T extends keyof JSX.IntrinsicElements
> = React.PropsWithoutRef<JSX.IntrinsicElements[T]>;

export const sizes = ['small', 'medium', 'large'] as const;
export type Size = typeof sizes[number];

export interface ButtonProps extends Element<'button'> {
  /** One of the standard button sizes */
  size: Size;
  /** A product theme */
  theme: 'intuit' | 'turbotax' | 'quickbooks';
  /** Button text */
  text: string;
}

/** A button */
export const Button = (props: ButtonProps) => {
  const { size, theme, text, ...other } = props;

  // Get the current theme

  return (
    <button
      type="button"
      className={makeClass(
        styles.button,
        styles[theme],
        styles[`size-${size}`]
      )}
      {...other}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  size: 'large'
};

export default Button;
