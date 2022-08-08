import constants from '../../utils/constants';
import Button from '../button/button.component';
import styles from './error-box.module.css';

function ErrorBox({ error, retry }: ErrorBoxProps) {
  return (
    <div className={styles.error}>
      <h3 className={styles.title}>{error.toString()}</h3>
      <p>{error.stack?.toString()}</p>
      <Button size="big" variant="primary" onClick={retry}>
        {constants.retry}
      </Button>
    </div>
  );
}

export default ErrorBox;
