import clsx from 'clsx';
import styles from './button.module.css';

function Button({ className, size = 'big', variant = 'primary', onClick, children }: ButtonProps) {
  return (
    <button
      type="button"
      className={clsx(className, styles.button, {
        [styles.big]: size === 'big',
        [styles.secondary]: variant === 'secondary',
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
