import clsx from 'clsx';
import styles from './button.module.css';

function Button({ className, size, variant, children }: ButtonProps) {
  return (
    <button
      type="button"
      className={clsx(className, styles.button, {
        [styles.big]: size === 'big',
        [styles.secondary]: variant === 'secondary',
      })}
    >
      {children}
    </button>
  );
}

export default Button;
