import clsx from 'clsx';
import { CloverIcon, DiamondIcon, HeartIcon, SpadeIcon } from '../svg/svg.component';
import styles from './symbol.module.css';

function Symbol({ className, suite, variant = 'big' }: SymbolProps) {
  const Icon = {
    clover: CloverIcon,
    diamond: DiamondIcon,
    heart: HeartIcon,
    spade: SpadeIcon,
  }[suite];

  return (
    <Icon className={clsx(className, styles.symbol, { [styles.small]: variant === 'small' })} />
  );
}

export default Symbol;
