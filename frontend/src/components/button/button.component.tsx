import clsx from 'clsx';
import styles from './button.module.css';

function Button({
  className,
  size = 'big',
  variant = 'primary',
  onClick,
  type = 'button',
  children,
}: ButtonProps) {
  const classes = clsx(className, styles.button, {
    [styles.big]: size === 'big',
    [styles.secondary]: variant === 'secondary',
  });

  return type === 'submit' ? (
    <button className={classes} type="submit" onClick={onClick}>
      {children}
    </button>
  ) : (
    <button className={classes} type="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
