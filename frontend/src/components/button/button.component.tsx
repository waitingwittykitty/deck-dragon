import clsx from 'clsx';
import styles from './button.module.css';

function Button({ size, variant, position, children }: ButtonProps) {
  return (
    <button
      type="button"
      className={clsx(styles.button, {
        [styles.big]: size === 'big',
        [styles.secondary]: variant === 'secondary',
        [styles.center]: position === 'center',
        [styles.end]: position === 'end',
      })}
    >
      {children}
    </button>
  );
}

export default Button;
