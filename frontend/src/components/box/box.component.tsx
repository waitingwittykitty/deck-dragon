import styles from './box.module.css';

function Box({ title, description }: BoxProps) {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
    </section>
  );
}

export default Box;
