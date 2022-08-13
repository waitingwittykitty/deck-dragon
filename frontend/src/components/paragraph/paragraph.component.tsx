import styles from './paragraph.module.css';

function Paragraph({ children }: ParagraphProps) {
  return <p className={styles.paragraph}>{children}</p>;
}

export default Paragraph;
