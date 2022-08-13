import { useField } from 'formik';
import styles from './form-field.module.css';

function FormField({ label, ...props }: FormFieldProps) {
  const [field, meta] = useField(props);

  return (
    <fieldset className={styles.field}>
      <label className={styles.label} htmlFor={props.id || props.name}>
        {label}
      </label>
      <input className={styles.input} {...field} {...props} />
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </fieldset>
  );
}

export default FormField;
