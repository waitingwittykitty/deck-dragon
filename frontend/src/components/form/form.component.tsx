import { Form as FormikForm } from 'formik';
import styles from './form.module.css';

function Form({ children }: FormProps) {
  return <FormikForm className={styles.form}>{children}</FormikForm>;
}

export default Form;
